const Http = require('../utils/Http');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;

    this.http = new Http(this);
  }

  async authorize(code) {
    return await this.http.request('POST', '/token', { body: { code: code }});
  }
}

module.exports = Client;
