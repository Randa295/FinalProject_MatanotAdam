const bossdb= require('./boss-db.js');
const DB = require('../../../general-db.js');


module.exports.bossUpdate = async (req, res) => {
  itemToUpdate = req.body.editObj;
  ids = req.body.ids;
  ids_string = ['('];
  ids_string.push(ids.join(','));
  ids_string.push(')')
  ids_string = ids_string.join('');
  result = await DB.query(`UPDATE \`boss-items\` SET \`first_name\`='${itemToUpdate.first_name}', \`last_name\`='${itemToUpdate.last_name}', \`phone\`='${itemToUpdate.phone}' WHERE id IN ${ids_string}`);
  res.json(true);
}

module.exports.bossAdd = async (req, res) => {
  itemToAdd = req.body;
  result = await DB.query(`INSERT INTO \`boss-items\` VALUES(NULL, '${itemToAdd.first_name}', '${itemToAdd.last_name}', '${itemToAdd.phone}')`);
  res.json({ "id": result.insertId });
}

module.exports.boss = async(req,res) => {
  if (req.session.userid && req.session.admin === 1) {
    return res.json(await bossdb.bossjson(req));
  } else {
    return res.send("You can't access this page!");
  }
}