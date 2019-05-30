const api = require('../src/api');

const client = new api('token');

async function test() {
  console.log(await client.getGuilds()); /* eslint-disable-line */
}

test();
