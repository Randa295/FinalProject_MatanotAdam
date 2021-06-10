const express = require('express')
const header = require('../../parts/header/header-controller.js')
const categoriesjson= require('./categories.json');
const carouseljson= require('./carousel.json');
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Categories =async()=>{
  return await DB.query("SELECT * FROM `categoriesitems`");

}
let Carousel =async()=>{
  return await DB.query("SELECT * FROM `specialproductsitems`");

}

let Content =async()=>{
  return JSON.parse('{"Categories":'+JSON.stringify(await Categories()) +',"Carousel":'+JSON.stringify(await Carousel())
  +"}")
}


module.exports.homejson = async (req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Content":'+JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}

