const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-1' });
const ssm = new AWS.SSM();

module.exports = ssm;
