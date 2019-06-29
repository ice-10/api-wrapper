const HttpUtil = require('../utils/HttpUtil');

class Client {

  constructor(options) {
    this.baseURL = options.baseURL;
    this.http = new HttpUtil(this);
  }

  authorize(code) {
    return this.http.request('post', '/tokens', { body: { code: code }});
  }

  refresh(token) {
    return this.http.request('post', '/tokens', { body: { refreshToken: token }});
  }

  getSelfUser(token) {
    return this.http.request('get', '/users/@me', { headers: { 'authorization': `Bearer ${token}` } });
  }

  getSelfGuilds(token) {
    return this.http.request('get', '/users/@me/guilds', { headers: { 'authorization': `Bearer ${token}` } });
  }
}

module.exports = Client;
