const express = require('express')
const router = express.Router();
const homedb= require('./home-db.js');


module.exports.home =  async(req,res) => {
  res.json(await homedb.homejson(req))
}