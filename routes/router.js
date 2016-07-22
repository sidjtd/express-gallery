const Express = require('express');
const Router = Express.Router();

const db = require('../models');
const Post = db.Post;

Router.get('/', (req, res) => {
  Post.all()
    .then( _ => {
      return res.status(200).send({'success': true})})
    .catch( err => {
      return res.status(500).send({'success': false});
    });
});

Router.get('/new', (req, res) => {
  res.send('GET received for /gallery/new');
  // return res.render('./products/new');
});

Router.get('/:id', (req, res) => {
  var id = req.params.id;
  Post.findAll({
    where: {
      id: `${id}`
    }
  })
  .then(function (postdata) {
      res.json(postdata); // returns query result
    });
  // Post.byId(req.params.id)
  //   .then( _ => {
  //     return res.status(200).send({'success': true})})
  //   .catch( err => {
  //     return res.status(500).send({'success': false});
  //   });
});



Router.post('/', (req,res)=>{
  Post.create(req.body)
  .then(function (postdata) {
      res.json(postdata); // sends back values as entered into DB
    });
  //res.send('POST received for /gallery');
  // Post.add(req.body)
  // .then( _ => {
  //   return res.status(200).send({'success': true})})
  // .catch( err => {
  //   return res.status(500).send({'success': false});
  // });
});

Router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  res.send(`GET (edit) received for /gallery/${id}/edit`);
  // Post.edit(req.body)
  // .then( _ => {
  //   return res.status(200).send({'success': true})})
  // .catch( err => {
  //   return res.status(500).send({'success': false});
  // });
});

Router.put('/:id', (req, res) => {
  var id = req.params.id;
  res.send(`PUT (edit) received for /gallery/${id}`);
  // Post.put(req.param.id)
  // .then( _ => {
  //   return res.status(200).send({'success': true})})
  // .catch( err => {
  //   return res.status(500).send({'success': false});
  // });
});

Router.delete('/:id', (req, res) => {
  var id = req.params.id;
  res.send(`DELETE received for /gallery/${id}`);
  // Post.delete(req.param.id)
  // .then( _ => {
  //   return res.status(200).send({'success': true})})
  // .catch( err => {
  //   return res.status(500).send({'success': false});
  // });
});


module.exports = Router;


