const HttpUtil = require('../utils/HttpUtil');

class Client {

  /**
   * Create a new instance of an API Client
   * 
   * @param {object} options Basic options needed to configure the Client
   */
  constructor(options) {
    this.baseURL = options.baseURL;
    this.http = new HttpUtil(this);
  }

  /**
   * Returns access and refresh tokens
   *  
   * @param {string} code The authorization code Discord returned
   */  
  authorize(code) {
    return this.http.request('post', '/tokens', { body: { code: code }});
  }

  /**
   * Returns a new set of access and refresh tokens
   * 
   * @param {string} token The refresh token our API returned
   */
  refresh(token) {
    return this.http.request('post', '/tokens', { body: { refreshToken: token }});
  }

  /**
   * Returns the user object related to the provided token
   * 
   * @param {string} token The access token our API returned
   */
  getSelfUser(token) {
    return this.http.request('get', '/users/@me', { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Returns all guilds the user is in related to the provided token
   * 
   * @param {string} token The access token our API returned
   */
  getSelfGuilds(token) {
    return this.http.request('get', '/users/@me/guilds', { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Returns the subscription object related to the provided token
   * 
   * @param {string} token The access token our API returned
   */
  getSelfSubscription(token) {
    return this.http.request('get', '/users/@me/subscription', { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Applies Premium to the specified guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  applyPremium(token, id) {
    return this.http.request('post', `/guilds/${id}/premium`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Removes Premium from the specified guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  removePremium(token, id) {
    return this.http.request('delete', `/guilds/${id}/premium`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Creates a hostedPage related to the provided planId
   * 
   * @param {string} token The access token our API returned 
   * @param {string} planId The planId of our chargebee plans
   * @param {string} type The type of the requested hostedPage
   */
  createHostedPage(token, planId, type) {
    return this.http.request('post', '/users/@me/subscription/hostedPages', { headers: { 'authorization': `Bearer ${token}` }, body: { planId: planId, type: type } });
  }
}

module.exports = Client;
