class RestResponse {

  constructor(response) {
    this.code = response.statusCode;
    this.body = JSON.parse(response.body);
  }
}

module.exports = RestResponse;
