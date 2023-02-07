const router = require("express").Router();
const Post = require("../models/Post")

router.post('/posts', (req, res, next) => {
    const { name, img, description } = req.body;
  
    Post.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));
  });


  router.get('/posts', (req,res) =>{
    Post.find()
    .then((postsFromDB) => {
      res.json({ Posts: postsFromDB })
    })
    .catch(error => console.log(error));
  })
  router.get('/posts/img', (req,res) =>{
    Post.find()
    .then((imgFromDb) => {
      res.json({ Posts: imgFromDb.img })
    })
    .catch(error => console.log(error));
  })

  

  module.exports = router;