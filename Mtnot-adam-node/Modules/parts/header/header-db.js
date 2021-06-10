const DB = require('../../../general-db');

let navbar1 =async(req)=>{
  if (req && req.session && req.session.admin === 1) {
    return await DB.query("SELECT *FROM menuelist INNER JOIN menueitems ON menuelist.id=menueitems.menuid AND menuelist.id = 1");
  }
  return await DB.query("SELECT *FROM menuelist INNER JOIN menueitems ON menuelist.id=menueitems.menuid AND menuelist.id = 1 AND menueitems.adminOnly=0 ");
  
}
let navbar2=async()=>{
  return await DB.query("SELECT *FROM menuelist INNER JOIN menueitems ON menuelist.id=menueitems.menuid AND menuelist.id = 2");
}


module.exports.HeaderJson= async(req)=>{
  return  JSON.parse('{"Navbar1":{"navbar1":'+JSON.stringify(await navbar1(req))+"}"+',"Navbar2":{"navbar2":'+JSON.stringify(await navbar2())+"}}")
}