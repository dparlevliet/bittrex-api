class Base {

  constructor(settings) {
    this.urlRequestOptions = Object.assign({
      method: 'GET',
      agent: false,
      headers: {
        'User-Agent': 'Mozilla/4.0 (compatible; NodeJS Bittrex API v2 (alpha))',
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }, settings.urlRequestOptions || {});

    this.settings = settings;
  }

  log(string) {
    console.log(string);
  }

  error(obj) {

  }

  updateSettings(settings) {

  }

  makeMarketString(currency, pair) {
    return pair + '-' + currency;
  }

  requiredSettings(settings) {
    let missing = [];

    settings.forEach((settingRequest) => {
      let paths = settingRequest.split('.');
      let link = this.settings;

      try {
        paths.forEach((part) => {
          if (link[part]) {
            link = link[part];
          } else {
            let message = 'Setting path not found: ' + settingRequest;
            missing.push(message);
            throw Error(message);
          }
        });
      } catch (e) {
        return true;
      }
    });

    if (missing.length > 0) {
      return missing;
    }

    return true;
  }

}

export default Base;