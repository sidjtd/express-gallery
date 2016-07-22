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

Router.get('/gallery/:id/', (req, res) => {
  Post.byId(req.params.id)
    .then( _ => {
      return res.status(200).send({'success': true})})
    .catch( err => {
      return res.status(500).send({'success': false});
    });
});


Router.get('/gallery/new', (req, res) => {
  return res.render('./products/new');
});


Router.post('/gallery', (req,res)=>{
  Post.add(req.body)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.get('/gallery/:id/edit', (req, res) => {
  Post.edit(req.body)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.put('/gallery/:id', (req, res) => {
  Post.put(req.param.id)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.delete('/gallery/:id', (req, res) => {
  Post.delete(req.param.id)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});


module.exports = Router;