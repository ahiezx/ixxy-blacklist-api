const handler = require('./handler')
var mysql = require('mysql')

var con = mysql.createConnection({
	host: handler.config.data.host,
	user: handler.config.mysql.user,
	password: handler.config.mysql.password,
	database: 'ahmed',
	charset: 'utf8mb4'
});

con.connect(function(err) {
  if (err){console.log(handler.messages.offlinePrefix +"MYSQL");}
  else {console.log(handler.messages.onlinePrefix +"MYSQL");}
});

var query = function query(query, fetch, callback) {
	if(typeof query !== 'undefined'){
		con.query(query, fetch, function(err,result,fields) {
			if (err) console.log("Undefined query");
			return callback(result)
		})
	}
	else{
		return console.log("Undefined query")
	}
}

module.exports.query = query
