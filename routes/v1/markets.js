const handler = require('../../data/handler')
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var database = require('../../data/database')

router.get("/:name", function(req,res) {
	database.query(`SELECT * FROM shops WHERE name = ? LIMIT 1`,[req.params.name], function(data) {
		if(data === undefined || data.length == 0) res.json({message:"Not found",market:req.params.name});
		else res.json(data[0]);
	})
})

module.exports = router;
