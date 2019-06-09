const Http = require('../utils/Http');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;

    this.http = new Http(this);
  }

  authorize(code) {
    return this.http.request('post', '/token', { headers: { 'content-type': 'application/json' }, body: { code: code }});
  }
}

module.exports = Client;
