const express = require('express')
const favoritsdb= require('./favorits-db.js');

module.exports.favorits= async(req,res) => {
  res.json(await favoritsdb.favoritsjson(req))
}