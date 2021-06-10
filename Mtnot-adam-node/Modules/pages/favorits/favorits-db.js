const express = require('express')
const header = require('../../parts/header/header-controller.js')
const favjson= require('./fav.json');
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content=async()=>{
  return await DB.query("SELECT * FROM `favorititems`");
}

module.exports.favoritsjson  = async(req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Content":'+JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
