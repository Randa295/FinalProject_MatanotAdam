const header = require('../../parts/header/header-controller.js')
const cardjson= require('./card.json');
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content =()=>{
  return(cardjson)
}

module.exports.shoppingjson  = async(req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Content":'+JSON.stringify(Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}