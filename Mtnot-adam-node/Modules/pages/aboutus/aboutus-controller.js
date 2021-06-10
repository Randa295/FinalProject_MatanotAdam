const express = require('express')
const aboutusdb= require('./aboutus-db.js');


module.exports.aboutus= async(req,res) => {
  res.json(await aboutusdb.aboutusjson(req))
}