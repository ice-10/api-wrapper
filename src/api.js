const http = require('./utils/http');

class api {

  constructor(token, baseURL = 'http://127.0.0.1:1337') {
    this.token = token;
    this.baseURL = baseURL;
  }

  async getGuilds() {
    return await http.get('/images', this);
  }
}

module.exports = api;
