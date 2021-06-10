const express = require('express')
const shoppingdb= require('./shop-db.js');

module.exports.shopping  = async(req,res) => {
  res.json(await shoppingdb.shoppingjson(req))
}