const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
var Post = db.Post;


/*  ROUTES  */
var routr = require ('./routes/router');

/*  MIDDLEWARE  */
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/gallery', routr);

app.listen(3000, function() {
  db.sequelize.sync();
});