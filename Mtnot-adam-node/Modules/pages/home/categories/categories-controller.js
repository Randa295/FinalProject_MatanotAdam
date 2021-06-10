const categories_db = require('./categories-db.js');

module.exports.categories  =  async (req, res, cat) => {
    res.json( await categories_db.categoriesjson(req,cat))
}