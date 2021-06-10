const footerjson = require('./footer.json')
const DB = require('../../../general-db');


module.exports.FooterJson=async () => {
  return await DB.query("SELECT *FROM menuelist INNER JOIN menueitems ON menuelist.id=menueitems.menuid AND menuelist.id = 3");
}
