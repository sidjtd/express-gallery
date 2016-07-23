const Express = require('express');
const Router = Express.Router();

const db = require('../models');
const Post = db.Post;


Router.get('/', (req, res) => {
  Post.findAll()
  .then(function (findResult) {
      res.json(findResult); // returns as an array
    });
});

Router.get('/new', (req, res) => {
  res.send('GET received for /gallery/new');
});

Router.get('/:id', (req, res) => {
  var id = req.params.id;
  Post.findById(id)
  .then(function (findResult) {
      res.json(findResult); //return as obj
    });
});


Router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  res.send(`GET (edit) received for /gallery/${id}/edit`);
});


Router.post('/', (req,res)=>{
  Post.create(req.body)
  .then(function (postdata) {
      res.json(postdata); // sends back values as entered into DB
    });
});


Router.put('/:id', (req, res) => {
  var body = req.body;
  body.id = req.params.id;
  Post.upsert(body)
  .then(function (result) {
      res.json(result); // sends back 0 or 1 for failure/success
    });
});

Router.delete('/:id', (req, res) => {
  var id = req.params.id;
  Post.destroy({
    where: {
      id: `${id}`
    }
  })
   .then(function (result) {
       res.json(result); // sends back 0 or 1 for failure/success
     });
 });


module.exports = Router;

