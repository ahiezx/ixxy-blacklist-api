let onlinePrefix = '    ├─[\x1b[1m\x1b[32mONLINE\x1b[0m] '
let handlerPrefix = '    ├───┤[\x1b[1m\x1b[32mHANDLER\x1b[0m] '
let offlinePrefix = '    ├─[\x1b[1m\x1b[31mOFFLINE\x1b[0m] '
let serverOnline = `[\x1b[4m\x1b[1m\x1b[33mSERVER\x1b[0m] - CONNECTED`

module.exports.onlinePrefix = onlinePrefix
module.exports.handlerPrefix = handlerPrefix
module.exports.offlinePrefix = offlinePrefix
module.exports.serverOnline = serverOnline
