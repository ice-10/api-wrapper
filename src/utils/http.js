const request = require('request');

class Http {

  constructor(client) {
    this.client = client;
  }

  req(uri, headers, body) {
    request({
      method: 'GET',
      uri: uri,
      headers: headers,
      body: body
    }, (error, response, body) => {
      console.log('e: ' + error); /* eslint-disable-line */
      console.log('r: ' + response); /* eslint-disable-line */
      console.log('b: ' + body); /* eslint-disable-line */
    });
  }
}

module.exports = Http;
