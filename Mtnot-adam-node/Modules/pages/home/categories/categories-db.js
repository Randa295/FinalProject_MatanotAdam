const header = require('../../../parts/header/header-controller.js')
const category1json = require('./category1.json');
const category2json = require('./category2.json');
const category3json = require('./category3.json');
const category4json = require('./category4.json');
const category5json = require('./category5.json');
const footer = require('../../../parts/footer/footer-controller.js')
const DB = require('../../../../general-db');


let Categories = async(cat) => {
    let dbQuery="SELECT * FROM `productsitems` WHERE idproducts="+cat;
    return await DB.query(dbQuery);
}

let Content =async (cat) => {
    return JSON.parse('{"photos":' + JSON.stringify(await Categories(cat)) + "}")
}

module.exports.categoriesjson =async(req,cat) => {
    return JSON.parse('{"Header":' + JSON.stringify(await header.Header(req))
        + ',"Content":' + JSON.stringify(await Content(cat))
        + ',"Footer":' + JSON.stringify(await footer.Footer()) + "}")
}