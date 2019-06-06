const Http = require('Http');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;

    this.http = new Http(this);
  }

  authorize(code) {
    this.http.req(this.baseURL + '/token', {
      'Content-Type': 'application/json'
    }, {
      'code': code
    });
  }
}

module.exports = Client;
