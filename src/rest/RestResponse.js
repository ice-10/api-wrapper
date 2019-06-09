class RestResponse {

  constructor(response) {
    this.code = response.status || response.response.status;
    this.body = response.data || response.response.data;
    this.headers = response.headers || response.response.headers;
  }
}

module.exports = RestResponse;
