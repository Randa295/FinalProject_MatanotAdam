const bossdb= require('./boss-db.js');


module.exports.boss = async(req,res) => {
  if (req.session.userid && req.session.admin === 1) {
    return res.json(await bossdb.bossjson(req));
  } else {
    return res.send("You can't access this page!");
  }
}