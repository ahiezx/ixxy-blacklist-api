var functions = require('./functions')
var config = require('../config')
var messages = require('./messages')
var requests = 0;

module.exports.messages = messages
module.exports.config = config
module.exports.requests = requests
module.exports.functions = functions

module.exports.exports = {1:"Config",2:"Messages",3:"Functions"}
