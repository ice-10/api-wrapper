const HttpUtil = require('../utils/HttpUtil');

/**
 * @deprecated This is going to be fully reworked while https://app.clubhouse.io/groovy/epic/337/complete-webapp-rework
 */
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
  getSelfSubscription(token, useCache = true) {
    return this.http.request('get', '/users/@me/subscription', { headers: { 'authorization': `Bearer ${token}` }, params: { useCache: useCache } });
  }

  /**
   * Gets all selfuser-related upgrades
   * 
   * @param {string} token The access token our API returned
   */
  getSelfUpgrades(token) {
    return this.http.request('get', '/users/@me/upgrades', { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Gets a Discord user
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord user id
   */
  getUser(token, id) {
    return this.http.request('get', `/users/${id}`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Gets premium-related data from the specified guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  getGuildUpgrade(token, id) {
    return this.http.request('get', `/guilds/${id}/upgrade`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Checks if the bot is present in a specific guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  existsGuild(token, id) {
    return this.http.request('get', `/guilds/${id}/exists`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Applies Premium to the specified guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  upgradeGuild(token, id) {
    return this.http.request('post', `/guilds/${id}/upgrade`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Removes Premium from the specified guild
   * 
   * @param {string} token The access token our API returned
   * @param {string} id The Discord guild id
   */
  downgradeGuild(token, id) {
    return this.http.request('delete', `/guilds/${id}/upgrade`, { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Creates a hostedPage related to the provided planId
   * 
   * @param {string} token The access token our API returned 
   * @param {string} planId The planId of our chargebee plans
   * @param {string} type The type of the requested hostedPage
   */
  createHostedPage(token, id, type, quantity) {
    return this.http.request('post', '/chargebee/hostedPages', { headers: { 'authorization': `Bearer ${token}` }, body: { planId: id, type: type, planQuantity: quantity } });
  }

  /**
   * Creates a hostedPage related to the provided planId
   * 
   * @param {string} token The access token our API returned 
   * @param {string} planId The planId of our chargebee plans
   * @param {string} type The type of the requested hostedPage
   * @param {string} coupon The coupon code that should be applied
   */
  createHostedPageWithCoupon(token, id, type, quantity, coupon) {
    return this.http.request('post', '/chargebee/hostedPages', { headers: { 'authorization': `Bearer ${token}` }, body: { planId: id, type: type, planQuantity: quantity, coupon: coupon } });
  }

  /**
   * Creates a hostedPage related to the provided planId
   * 
   * @param {string} token The access token our API returned 
   */
  createHostedPageForReactivation(token) {
    return this.http.request('post', '/chargebee/hostedPages', { headers: { 'authorization': `Bearer ${token}` }, body: { reactivate: 'true', type: 'checkoutExisting' } });
  }

  /**
   * Creates a portalSession related to the selfUser
   * 
   * @param {string} token The access token our API returned
   */
  createPortalSession(token) {
    return this.http.request('post', '/chargebee/portalSessions', { headers: { 'authorization': `Bearer ${token}` } });
  }

  /**
   * Requests the plan object related to the planId
   * 
   * @param {string} token The access token our API returned
   * @param {string} planId The planId for the requested plan
   */
  getPlan(planId) {
    return this.http.request('get', `/chargebee/plans/${planId}`, {});
  }

  /**
   * Requests all available plans
   */
  getPlans() {
    return this.http.request('get', '/chargebee/plans', {});
  }
}

module.exports = Client;
