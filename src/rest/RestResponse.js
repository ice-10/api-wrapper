class RestResponse {

  /**
   * Creates a new RestResponse out of a given axios response
   * 
   * @param {object} response The response that the axios client returned
   */
  constructor(response) {
    this.code = response.status;
    this.body = response.data;
    this.headers = response.headers;
  }
}

module.exports = RestResponse;
