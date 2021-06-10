const express = require('express')
const app = express();
const port = 8000;
const home = require('./modules/pages/home/home-controller.js')
const favorits = require('./modules/pages/favorits/favorits-controller.js');
const contactus = require('./modules/pages/contactus/contactus-controller.js');
const feedback = require('./modules/pages/feedback/feedback-controller.js');
const aboutus = require('./modules/pages/aboutus/aboutus-controller.js');
const shopping = require('./modules/pages/shopping/shopping-controller.js');
const signup = require('./modules/pages/signup/signup-controller.js');
const login = require('./modules/pages/login/login-controller.js');
const payment = require('./modules/pages/payment/payment-controller.js');
const boss = require('./modules/pages/boss/boss-controller.js');
const categories = require('./modules/pages/home/categories/categories-controller.js');
const DB = require('./general-db.js');
const session = require('express-session');


// GET method route
const jsonParser = express.json()

// Init the session
app.use(session({ secret: 'keyboard matnot', cookie: { maxAge:100000000} }))
app.use(express.static(__dirname + '/userid'));
app.use(express.static(__dirname + '/first_name'));
app.use(express.static(__dirname + '/last_name'));
app.use(express.static(__dirname + '/email'));
app.use(express.static(__dirname + '/phone'));
app.use(express.static(__dirname + '/admin'));

// Access the session as req.session
app.post('/login', jsonParser, async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    if (req.session.userid) {
      return res.send({ res: "You are already logged in please logout" });
    } else {
      result = await DB.query(`SELECT * FROM \`user\` WHERE \`email\`='${email}' and \`password\`='${password}'`);
      if (result.length !== 0) {
        req.session.userid = result[0]['iduser'];
        req.session.first_name = result[0]['fname'];
        req.session.last_name = result[0]['lname'];
        req.session.email = result[0]['email'];
        req.session.phone = result[0]['number'];
        req.session.admin = result[0]['admin'];
        return res.send({ res: true })
      }
      return res.send({ res: "Incorrect email or password" });
    }
  } else {
    return res.send({ res: "You need to enter the email and password" });
  }
});

app.get('/logout', (req, res) => {
  if (req.session.userid) {
    req.session.destroy((err) => {
      if (err) {
        return res.send(err);
      }
      return res.send({ res: true });
    });
  } else {
    return res.send({ res: false });
  }
});

app.get('/home', home.home)
app.get('/feedback',feedback.feedback)
app.get('/aboutus',aboutus.aboutus)
app.get('/favorits', favorits.favorits)
app.get('/contactus', contactus.contactus)
app.get('/shopping', shopping.shopping)
app.get('/signup',signup.signup)
app.get('/login',login.login)
app.get('/payment',payment.payment)
app.get('/boss',boss.boss)
app.get('/gallery', async (req, res) => {
  let cat = req.query.cat;
  categories.categories(req, res, cat);
});

app.delete('/boss', jsonParser, async(req, res) => {
  ids = req.body.ids;
  ids.forEach(async (id) => {
    result = await DB.query('DELETE FROM `boss-items` WHERE `id`=' + id);
  });
  res.send(true);
});

app.post('/boss', jsonParser, async (req, res) => {
  itemToAdd = req.body;
  result = await DB.query(`INSERT INTO \`boss-items\` VALUES(NULL, '${itemToAdd.first_name}', '${itemToAdd.last_name}', '${itemToAdd.phone}')`);
  res.json({"id": result.insertId});
});

app.put('/boss', jsonParser, async (req, res) => {
  itemToUpdate = req.body.editObj;
  ids = req.body.ids;
  ids_string = ['('];
  ids_string.push(ids.join(','));
  ids_string.push(')')
  ids_string = ids_string.join('');
  result = await DB.query(`UPDATE \`boss-items\` SET \`first_name\`='${itemToUpdate.first_name}', \`last_name\`='${itemToUpdate.last_name}', \`phone\`='${itemToUpdate.phone}' WHERE id IN ${ids_string}`);
  res.json(true);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});