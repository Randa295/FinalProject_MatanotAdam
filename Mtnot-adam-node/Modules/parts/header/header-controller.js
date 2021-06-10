const express = require('express')
const navbar = require('./header-db.js')



module.exports.Header=async (req) => {
  return (await navbar.HeaderJson(req))
}