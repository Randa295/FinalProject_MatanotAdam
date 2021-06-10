const express = require('express')
const header = require('../../parts/header/header-controller.js')
const contactjson= require('./contact.json');
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content =async()=>{
  return await DB.query("SELECT *FROM formlist INNER JOIN formitems ON formlist.id=formitems.formId AND formlist.id = 3");

}
module.exports.contactusjson  = async(req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Content":'+JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
