const Express = require('express');
const Router = Express.Router();

const models = require('../models/galleryactions');

Router.get('/', (req, res) => {
  models.all()
    .then( _ => {
      return res.status(200).send({'success': true})})
    .catch( err => {
      return res.status(500).send({'success': false});
    });
});

Router.get('/gallery/:id/', (req, res) => {
  models.byId(req.params.id)
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
  models.add(req.body)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.get('/gallery/:id/edit', (req, res) => {
  models.edit(req.body)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.put('/gallery/:id', (req, res) => {
  models.put(req.param.id)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});

Router.delete('/gallery/:id', (req, res) => {
  models.delete(req.param.id)
  .then( _ => {
    return res.status(200).send({'success': true})})
  .catch( err => {
    return res.status(500).send({'success': false});
  });
});


module.exports = Router;