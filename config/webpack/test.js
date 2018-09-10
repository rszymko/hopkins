const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')
console.log('=========================================');
console.log('test.js');
console.log('=========================================');
module.exports = merge(sharedConfig, {})
