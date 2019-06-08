const centra = require('centra');
const RestResponse = require('../rest/RestResponse');

class Http {

  constructor(client) {
    this.client = client;
  }

  async request(method, url, { headers = {}, body = {} }) {
    return await centra(this.client.baseURL + url, method).body(body, 'json').header(headers).send().then(response => {
      console.log(response); /* eslint-disable-line */
      return new RestResponse(response);
    }).catch(error => {
      console.log(error); /* eslint-disable-line */
      return new RestResponse(error);
    });
  }
}

module.exports = Http;
