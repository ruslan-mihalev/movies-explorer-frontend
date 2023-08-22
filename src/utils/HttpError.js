class HttpError extends Error {
  constructor(statusCode, statusText, body) {
    super(statusText);
    this.statusCode = statusCode;
    this.body = body;
  }
}

export default HttpError;
