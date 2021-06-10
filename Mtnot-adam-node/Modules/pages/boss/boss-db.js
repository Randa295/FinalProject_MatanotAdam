const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content = async () => {
  res = { "data": await DB.query("SELECT * FROM `boss-items`"), "headers": await DB.query("SELECT * FROM `boss-headers` WHERE `table_id`=0") };
  return res;
}


module.exports.bossjson = async (req) => {
  return JSON.parse('{"Header":' + JSON.stringify(await header.Header(req))
    + ',"Content":' + JSON.stringify(await Content())
    + ',"Footer":' + JSON.stringify(await footer.Footer()) + "}")
}