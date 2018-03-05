import v1 from './bin/v1.1/index.js';

class Bittrex {

  constructor(settings) {
    this.v1 = new v1(settings);
    //this.v2 = new v2(settings);
  }
  
  updateSettings(settings, doNotMerge) {
    this.v1.updateSettings(settings, doNotMerge);
    //this.v2.updateSettings(settings, doNotMerge);
  }

}

export default Bittrex;