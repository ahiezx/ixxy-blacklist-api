const handler = require('./data/handler.js')
const express = require('express')
const app = express()
app.use("/", require("./routes"));
app.disable('x-powered-by');
app.set('query parser', 'simple')

app.listen(handler.config.data.port, () => {
  console.log(`
 
${handler.messages.serverOnline}
 ───┬──`)

console.log(handler.messages.onlinePrefix +"Handler");

for(var value of Object.entries(handler.exports)) {
	console.log(handler.messages.handlerPrefix +value[1]);
}

})