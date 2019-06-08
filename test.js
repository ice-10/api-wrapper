const { Client } = require('./index');
const client = new Client({ baseURL: 'http://api.staging.groovy.bot'});


async function tester() {
  console.log(await client.authorize('bT15qD6zgbuIjI1rNMI7tlwY7JSE5P')); /* eslint-disable-line */
}

tester();
