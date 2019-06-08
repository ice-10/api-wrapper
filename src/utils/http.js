const got = require('got');

class Http {

  constructor(client) {
    this.client = client;
  }

  async request(method, url, headers, body) {
    try {
      return await got(url, {
        method: method,
        baseUrl: this.client.baseURL,
        headers: headers,
        body: body,
        json: true
      });      
    } catch(err) {
      return err;
    }
  }
}

module.exports = Http;
