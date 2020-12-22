const monk = require('monk');
const secrets = require('../secrets');
var connectionString = 'localhost/vueExpressDemo';

if (process.env.NODE_ENV == 'production') {
  connectionString = secrets
    .getSecret('/vue-express-demo/mongodburi')
    .then((result) => {
      console.log(`mongodb uri: ${result}`);
    });
} else {
  console.log(`Local dev environment.`);
}

const db = monk(connectionString);

module.exports = db;
