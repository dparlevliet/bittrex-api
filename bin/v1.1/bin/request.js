import crypto from 'crypto';
import request from 'request';
import Base from './base.js';
import RequestSuccess from './request-success.js';
import RequestError from './request-error.js';


class Request extends Base {

  constructor(settings) {
    super(settings);

    this.usedNonces = [];
  }

  getNonce() {
    return new Promise((resolve, reject) => {
      if (this.settings.getNonce) {
        this.settings.getNonce().then(resolve).catch(reject);
      } else {
        let interval = setInterval(() => {
          let nonce = new Date().getTime();

          if (this.usedNonces.indexOf(nonce) > -1) {
            // we already used this nonce. Wait for the next one.
            return;
          }

          clearInterval(interval);

          // keep the last X to try ensure we don't have collisions even if the clock is adjusted
          this.usedNonces = this.usedNonces.slice(-50);
          this.usedNonces.push(nonce);
          resolve(nonce);
        }, 100);
      }
    });
  }

  send(options) {
    return new Promise((resolve, reject) => {
      request(options, function(error, response, body) {
        let debug = {
          response: response,
          request: options,
        };

        if (!body || !response || response.statusCode != 200) {
          return reject(new RequestError({
            code: 'EAPI_REQUEST',
            message: 'URL request error',
            errorObj: error,
            debug: debug,
          }));
        }

        let jsonBody = {};
        try {
          jsonBody = JSON.parse(body);
        } catch (e) {}

        if (!response || !jsonBody.success) {
          debug.responseJson = jsonBody;

          // error returned by bittrex API - forward the result as an error
          return reject(new RequestError({
            code: 'EAPI_BITTREX',
            message: jsonBody.message,
            debug: debug,
          }));
        } else {
          return resolve(new RequestSuccess(jsonBody, debug));
        }
      });
    });
  }

  preparePublicOptions(url, queryString, options) {
    return new Promise((resolve, reject) => {
      let requestOptions = Object.assign(this.urlRequestOptions, {
        qs: queryString || {},
      });

      if (options) {
        requestOptions = Object.assign(requestOptions, options);
      }

      if (!requestOptions.url) {
        requestOptions.url = url;
      }

      resolve(requestOptions);
    });
  }

  sign(url, options) {
    return new Promise((resolve, reject) => {
      options.headers.apisign = crypto.createHmac('sha512', this.settings.auth.secret).update(url).digest('hex'); // setting the HMAC hash `apisign` http header
      options.timeout = (this.settings.requestTimeoutInSeconds || 5) * 1000;

      resolve(options);
    });
  }

  preparePrivateOptions(url, queryString, options) {
    return new Promise((resolve, reject) => {
      this.getNonce().then((nonce) => {
        let requestOptions = Object.assign(this.urlRequestOptions, {
          qs: queryString || {},
        });

        if (options) {
          requestOptions = Object.assign(requestOptions, options);
        }

        if (!requestOptions.url) {
          requestOptions.qs.apikey = this.settings.auth.key;
          requestOptions.qs.nonce = nonce;
          requestOptions.uri = url;
        }

        resolve(requestOptions);
      }).catch(reject);
    });
  }

  sendPublic(url, queryString, options) {
    return new Promise((resolve, reject) => {
      this.preparePublicOptions(url, queryString, options).then((requestOptions) => {
        this.send(requestOptions).then(resolve).catch(reject);
      }).catch(reject);
    });
  }

  sendPrivate(url, queryString, options) {
    return new Promise((resolve, reject) => {
      let missingSettings = this.requiredSettings([
        'auth.key',
        'auth.secret'
      ]);
      if (missingSettings.length > 0) {
        return reject(new RequestError({
          code: 'EAPI_SETTINGS',
          message: 'Api key and secret must be provided for private api methods',
          errorObj: null,
          debug: missingSettings,
        }));
      }

      this.preparePrivateOptions(url, queryString, options).then((requestOptions) => {
        this.sign(url, requestOptions).then((requestOptions) => {
          this.send(requestOptions).then(resolve).catch(reject);
        }).catch(reject);
      }).catch(reject);
    });
  }

}

export default Request;