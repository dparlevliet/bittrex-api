import Public from './public.js';
import Private from './private.js';
import Request from './bin/request.js';

class Api {

  constructor(settings) {
    this.Request = new Request(settings);
    this.Public = new Public(settings, this.Request);
    this.Private = new Private(settings, this.Request);
  }

  updateSettings(settings, doNotMerge) {
    this.Public.updateSettings(settings, doNotMerge);
    this.Private.updateSettings(settings, doNotMerge);
    this.Request.updateSettings(settings, doNotMerge);
  }

}

export default Api;