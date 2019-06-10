const axios = require('axios');
const RestResponse = require('../rest/RestResponse');

class Http {

  constructor(client) {
    this.client = client;

    axios.defaults.baseURL = this.client.baseURL;
  }

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
