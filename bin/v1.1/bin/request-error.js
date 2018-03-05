class RequestError extends Error {

  constructor(response) {
    super(response.message);

    this.name = 'RequestError';
    this.success = false;
    this.message = response.message;
    this.code = response.code;
    this.errorObj = response.errorObj;
    this.debug = response.debug;
    Error.captureStackTrace(this, RequestError);
  }

}

export default RequestError;