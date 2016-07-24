const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
var Post = db.Post;

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/gallery', routr);
app.use('/', routr);


app.listen(PORT, function() {
  db.sequelize.sync();
});