const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
var Post = db.Post;
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const CONFIG = require('./config_auth.json');

app.set('view engine','jade');
app.set('views','./templates');

/*  ROUTES  */
var routr = require ('./routes/router');
var PORT = 3000;

/*  MIDDLEWARE  */
app.use(function(req, res, next) {
  console.log('method: ',req.method, ' url: ',req.url);
  next();
 });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/gallery', routr);
app.use('/', routr);
app.use(express.static('public'));


app.listen(PORT, function() {
  db.sequelize.sync();
});