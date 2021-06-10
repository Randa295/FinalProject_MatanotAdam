const express = require('express')
const paymentdb= require('./payment-db.js');


module.exports.payment = (req,res) => {
  res.json(paymentdb.paymentjson(req))
}