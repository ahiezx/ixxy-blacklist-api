const fs = require('fs');
var editRequests = function editRequests() {
	fs.readFile('./data/requests.json', 'utf8', function (err, data) {
		FileData = JSON.parse(data);
		dat = {"requests":FileData.requests += 1}
	  fs.writeFile('./data/requests.json', JSON.stringify(dat), function(err, result) {
	     if(err) console.log('error', err);
	   });
	 });
}

var parseQuery = function parseQuery(q) {
	if(q) {
		if(typeof(q) === 'object') {
			let type = q.includes(q[0])
			return type
		}
		else {
			let type = q.toLowerCase()
			return type
		}			
		return false
	}
}

module.exports.editRequests = editRequests
module.exports.parseQuery = parseQuery