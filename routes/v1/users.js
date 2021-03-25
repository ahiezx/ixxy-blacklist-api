const handler = require('../../data/handler')
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var database = require('../../data/database')

router.get("/:type/:name", function(req,res) {
	if(req.params['type'] == "blacklist") {
		database.query(`SELECT * FROM blacklist WHERE name = ?`,[req.params.name], function(data) {
			if(data === undefined || data.length == 0) res.json({message:"Not found",user:req.params.name});
			else res.json(data[0]);
		})	
	}
	else if(req.params['type'] == "market") {
		database.query(`SELECT * FROM shops WHERE name = ?`,[req.params.name], function(data) {
			if(data === undefined || data.length == 0) res.json({message:"Not found",user:req.params.name});
			else res.json(data[0]);
		})
	}
	else {
		res.json({message:"Unknown Scope"})
	}
})

module.exports = router;
