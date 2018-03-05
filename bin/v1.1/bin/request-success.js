class RequestSuccess {
  
  constructor(result, debug) {
    this.message = result.message;
    this.success = true;
    this.debug = debug;
    this.result = result.result;
    
    // For convenience let's define the result type,
    // and length, if necessary
    if (typeof(this.result) == 'object') {
      if (Array.isArray(this.result)) {
        this.type = 'Array';
        this.length = this.result.length;
      } else {
        this.type = 'Object';
      }
    } else {
      this.type = 'Unknown';
    }
  }

}

export default RequestSuccess;