const axios = require('axios');
const consola = require('consola');
const RestResponse = require('../rest/RestResponse');

/**
 * @deprecated This Http util class is no longer supported and will be removed from upcoming versions!
 */
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
   * @param {object} param2 Optional headers, body and params
   */
  request(method, url, { headers = {}, body = {}, params = {} }) {
    return axios.request({
      method: method,
      url: url,
      headers: headers,
      data: body,
      params: params,
      validateStatus: status => {
        return status < 500;
      }
    }).then(response => {
      return new RestResponse(response);
    }).catch(error => {
      if (error.response) {
        return new RestResponse(error.response);
      } else if(error.request) {
        consola.error(error);
        return new RestResponse({
          status: 500,
          data: {
            status: 500,
            error: 'No response!',
            message: 'The server didn\'t respond!'
          },
          headers: {}
        });
      } else {
        consola.error(error);
        return new RestResponse({
          status: 500,
          data: {
            status: 500,
            error: 'Request failed!',
            message: 'The request could not be fulfilled!'
          },
          headers: {}
        });
      }
    });
  }
}

module.exports = Http;
