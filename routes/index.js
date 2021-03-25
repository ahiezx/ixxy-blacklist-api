const handler = require('../data/handler.js')
const express = require('express');
const router = express.Router();


router.use((req, res, next)=>  {
  if(req.hasOwnProperty('method')) {
  	handler.functions.editRequests()
  }
  res.header(handler.config.headers)
  next();
})

router.get("/", function(req, res){
   res.redirect('https://ixxy.org');
});

router.use("/v1", require("./v1"))

router.get('*', function(req, res){
  res.status(404).json({status:'Invalid request'});
});
module.exports = router;