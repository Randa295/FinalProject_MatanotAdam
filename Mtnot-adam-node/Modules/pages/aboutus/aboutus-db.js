const DB = require('../../../general-db');


module.exports.aboutusjson = async(req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header(req))
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
} 