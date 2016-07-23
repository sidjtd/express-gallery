const Express = require('express');
const Router = Express.Router();
const app = Express();
const db = require('../models');
const Post = db.Post;
const methodOverride = require('method-override');
app.use(methodOverride('X-HTTP-Method-Override'));


/*  >>> DAS MIDDLEWARE <<<  */
Router.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
/*  >>> END MIDDLEWARE <<<  */

Router.get('/', (req, res) => {
  Post.findAll()
  .then(function (findResult) {
      res.json(findResult); // returns query result as an array of objects
    });
});

Router.get('/new', (req, res) => {
  // res.send('GET received for /gallery/new');
  return res.render('./new');
});

Router.get('/:id', (req, res) => {
  var id = req.params.id;
  Post.findById(id)
  .then(function (findResult) {
      // res.json(findResult); // returns query result as a single object
      return res.render('./item', findResult.dataValues);
    });
});

Router.post('/', (req,res)=>{
  Post.create(req.body)
  .then(function (postdata) {
      res.json(postdata); // sends back values as entered into DB
    });
});

Router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  Post.findById(id)
  .then(function (result) {
    // console.log('result: ', result.dataValues);
    return res.render('./edit', result.dataValues);
  });
  // .then(function (findResult) {
  //     res.json(findResult); // returns query result as a single object
  //   });
  // populate rendered form values with findResult.author, findResult.image_url,
  // findResult.link, findResult.description
});

Router.put('/:id', (req, res) => {
  var body = req.body;
  body.id = req.params.id;
  // make sure id exists in the database
  Post.findById(body.id)
   .then((findResult) => {
    // null means the id wasn't in the db
    if(JSON.stringify(findResult) !== null && JSON.stringify(findResult) != 'null') {
      Post.upsert(body)
        .then(function (result) {
          return res.json(result); // sends back false if updated, true if created
        });
    } else {
      // ID doesn't exist
      return res.json(`couldn't find id ${body.id}`);
    }
  })
  .catch((err) => {
    console.error(`Problems with findById ${body.id}: `, err);
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
