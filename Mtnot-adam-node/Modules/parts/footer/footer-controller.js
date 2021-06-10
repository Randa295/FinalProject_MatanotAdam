const express = require('express')
const footer = require('./footer-db.js')


module.exports.Footer= () => {
  return(footer.FooterJson())
}
