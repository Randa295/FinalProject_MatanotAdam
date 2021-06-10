const express = require('express')
const contactusdb= require('./contactus-db.js');


module.exports.contactus = async(req,res) => {
  res.json(await contactusdb.contactusjson(req))
}