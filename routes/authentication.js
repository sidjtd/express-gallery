// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');
// const CONFIG = require('./config.json');

// app.set('views', 'views');
// app.set('view engine', 'jade');

// app.use(bodyParser.urlencoded({extended:true}));


// // app.use(session(CONFIG.SECRET));

// passport.use(new LocalStrategy((username, password, done) => {
//   const CREDENTIALS = CONFIG.CREDENTIALS;
//   const USERNAME = CREDENTIALS.USERNAME;
//   const PASSWORD = CREDENTIALS.PASSWORD;

//   var user = {
//     name: 'Joe',
//     role: 'ADMIN',
//     favColor: 'GREEN'
//   };

//   if ( username === USERNAME && password === PASSWORD ){
//       return done(null, user);
//   }
//   return done(null, false);
// }));

// passport.serializeUser((user, done) => {
//   return done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   return done(null, user);
// });

// const isAuthenticated = (req, res, next) => {
//   if(!req.isAuthenticated()){
//     return res.redirect('/login');
//   }
//   return next();
// };

// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.get('/secret', isAuthenticated, (req, res) => {
//   console.log('req.user',req.user);
//   res.render('secret', {role: req.user.name});
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/login');
// });

// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/secret',
//   failureRedirect: '/login'
// }));