class RestResponse {

  /**
   * Creates a new RestResponse out of a given axios response
   * 
   * @param {object} response The response that the axios client returned
   */
  constructor(response) {
    console.log(response); /* eslint-disable-line */
    this.code = response.status || response.response.status;
    this.body = response.data || response.response.data;
    this.headers = response.headers || response.response.headers;
  }
}

module.exports = RestResponse;
