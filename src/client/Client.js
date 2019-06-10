const HttpUtil = require('../utils/HttpUtil');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;

    this.http = new HttpUtil(this);
  }

  authorize(code) {
    return this.http.request('post', '/token', { headers: { 'content-type': 'application/json' }, body: { code: code }});
  }

  refresh(token) {
    return this.http.request('post', '/token', { headers: { 'content-type': 'application/json' }, body: { refreshToken: token }});
  }
}

module.exports = Client;
