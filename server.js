const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
var Post = db.Post;
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const CONFIG = require('./config_auth.json');
var PORT = 3000;

app.set('view engine','jade');
app.set('views','./templates');

/*  MIDDLEWARE  */
app.use(function(req, res, next) {
  console.log('method: ',req.method, ' url: ',req.url);
  next();
 });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: CONFIG.SECRET,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  const CREDENTIALS = CONFIG.CREDENTIALS;
  const USERNAME = CREDENTIALS.USERNAME;
  const PASSWORD = CREDENTIALS.PASSWORD;
    var user = {
      name: 'Joe',
      role: 'ADMIN',
      favColor: 'GREEN'
    };
    console.log('USERNAME: ', USERNAME);
    console.log('username: ', username);
    if(username === USERNAME && password === PASSWORD) {
      return done(null, user);
    }
    return done(null, false);
}));

passport.serializeUser(function(user, done) {
  console.log('user serialized.');
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('user deserialized.');
  return done(null, user);
});

const isAuthenticated = (req,res,next) => {
  if(!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  console.log('user authenticated.');
  return next();
};

app.post('/login', passport.authenticate('local', {
    successRedirect: '/gallery',
    failureRedirect: '/login'
  }));

app.get('/login', (req,res) => {
  res.render('login');
});

app.get('/logout', (req,res) => {
  req.logout();
  res.render('login');
});



/*  ROUTES  */
var routr = require ('./routes/router');
app.use('/gallery', routr);
app.use('/', routr);
app.use(express.static('public'));


app.listen(PORT, function() {
  db.sequelize.sync();
});