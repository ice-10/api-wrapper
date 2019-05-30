const request = require('centra');

module.exports = {
  async get(path, api) {
    const response = await request(api.baseURL, 'GET')
      .path(path)
      .header({
        'Content-Type': 'application/json'
      })
      .send();
    return await response.json();
  },

  post(path, api) {
    request(api.baseURL, 'POST')
      .path(path)
      .header({
        'Content-Type': 'application/json'
      })
      .body({

      })
      .send()
      .then(res => {
        return res;
      }).catch(err => {
        return err;
      });
  },

  patch(path, api) {
    request(api.baseURL, 'PATCH')
      .path(path)
      .header({
        'Content-Type': 'application/json'
      })
      .body({
        
      })
      .send()
      .then(res => {
        return res;
      }).catch(err => {
        return err;
      });
  }
};
