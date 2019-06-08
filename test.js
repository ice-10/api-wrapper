const { Client } = require('./index');
const client = new Client({ baseURL: 'http://api.staging.groovy.bot'});

async function tester() {
  console.log(await client.authorize('zsM512FqKUJb9HmpR7HZTGouMhm0kO')); /* eslint-disable-line */
}

tester();

//client.authorize('RCjn1kmy9vzM8QndI72s8GepNUgMSa');
