const express = require('express')
const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')


module.exports.paymentjson = async(req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}