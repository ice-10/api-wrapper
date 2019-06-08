class RestResponse {

  constructor(response) {
    this.code = response.statusCode;
    this.body = response.body;
  }
}

module.exports = RestResponse;
