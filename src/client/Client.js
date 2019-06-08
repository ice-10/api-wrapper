const Http = require('../utils/Http');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;

    this.http = new Http(this);
  }

  async authorize(code) {
    const response = await this.http.request('POST', '/token', {}, {
      code: code
    });

    return response.body;
  }
}

module.exports = Client;
