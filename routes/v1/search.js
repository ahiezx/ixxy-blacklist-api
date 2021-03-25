const handler = require('../../data/handler')
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var database = require('../../data/database')

router.get("/", function(req,res,next) {
	try {

	let type = handler.functions.parseQuery(req.query.type)
	let name = handler.functions.parseQuery(req.query.name)
	let platform = handler.functions.parseQuery(req.query.platform)

	if(name === true) {
		name = req.query.name[0]
	}
	if(platform === true){
		platform = req.query.platform[0]
	}

	if(req.query['type'] && type == "blacklist") {
			if(platform) {

				let platforms = platform.split(" ")
				platforms = platforms.filter(function(item, pos) { return platforms.indexOf(item) == pos; })

				req.query_addons = `SELECT * FROM blacklist WHERE`
				req.query_addons_array = []


				for(platform of platforms){
					if(platform && handler.config.platforms.includes(platform.toLowerCase())) {
						req.query_addons += ` name LIKE ? ESCAPE '=' AND platform = ? OR number LIKE ? ESCAPE '=' AND platform = ? OR`;
						req.query_addons_array.push("%="+name+"%",platform.toLowerCase(),"%="+name+"%",platform.toLowerCase())			
					}
					else if(platform && !handler.config.platforms.includes(platform.toLowerCase())){
						req.query_addons += ` name LIKE ? ESCAPE '=' AND platform = ? OR number LIKE ? ESCAPE '=' AND platform = ? OR`;
						req.query_addons_array.push("%="+name+"%",platform.toLowerCase(),"%="+name+"%",platform.toLowerCase())
					}
				}
				req.query_addons = req.query_addons.slice(0,-2)
				console.log(req.query_addons)

			}
			else{
				req.query_addons = `SELECT * FROM blacklist WHERE name LIKE ? ESCAPE '='`;
				req.query_addons_array = ["%=" +name +"%"]				
			}
	}



	else if(req.query['type'] && type == "market"){
		console.log(type)
			if(platform) {

				let platforms = platform.split(" ")
				platforms = platforms.filter(function(item, pos) { return platforms.indexOf(item) == pos; })

				req.query_addons = `SELECT * FROM shops WHERE`
				req.query_addons_array = []


				for(platform of platforms){
					if(platform && handler.config.platforms.includes(platform.toLowerCase())) {
						req.query_addons += ` name LIKE ? ESCAPE '=' AND platform = ? OR`;
						req.query_addons_array.push("%="+name+"%",platform.toLowerCase())			
					}
					else if(platform && !handler.config.platforms.includes(platform.toLowerCase())){
						req.query_addons += ` name LIKE ? ESCAPE '=' AND platform = ? OR`;
						req.query_addons_array.push("%="+name+"%",platform.toLowerCase())
					}
					else{
						req.query_addons = `SELECT * FROM shops WHERE name LIKE ? ESCAPE '='  `;
						req.query_addons_array = ["%=" +name +"%"]							
					}
				}
				req.query_addons = req.query_addons.slice(0,-2)
				// console.log(req.query_addons)

			}
			else{
				req.query_addons = `SELECT * FROM shops WHERE name LIKE ? ESCAPE '='`;
				req.query_addons_array = ["%=" +name +"%"]				
			}
	}
	else {
		res.json({message:"Unknown Scope"})
	}
	}
	catch(e){
		res.json({"status":"Unknown error occurred"})
		console.log(req.query['type'],e)
	}
	next()

}, function(req,res) {
	if(req.query_addons && req.query_addons_array){
        database.query(req.query_addons,req.query_addons_array, function(data) {
        	if(!data || data.length == 0) return res.json({message:"Not Found"})
        	else res.json(data)
        })
	}
})

module.exports = router;
