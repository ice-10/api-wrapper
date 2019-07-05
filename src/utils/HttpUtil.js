const axios = require('axios');
const RestResponse = require('../rest/RestResponse');

class Http {

  /**
   * Creates a new instance of the Http Utils
   * 
   * @param {Client} client The Client which created this instance
   */
  constructor(client) {
    this.client = client;
    axios.defaults.baseURL = this.client.baseURL;
  }

  /**
   * Creates a new request
   * 
   * @param {string} method The method to use for the request
   * @param {string} url The URL to send the request to
   * @param {object} param2 Optional headers and body
   */
  request(method, url, { headers = {}, body = {} }) {
    return axios.request({
      method: method,
      url: url,
      headers: headers,
      data: body
    }).then(response => {
      return new RestResponse(response);
    }).catch(error => {
      return new RestResponse(error);
    });
  }
}

module.exports = Http;
