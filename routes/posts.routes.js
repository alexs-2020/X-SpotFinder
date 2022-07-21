const router = require("express").Router();


const Post = require("../models/Post")

router.post('/posts', (req, res, next) => {
    const { name, description } = req.body;
    
    Post.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));
  });


  router.get('/posts', (req,res) =>{
    Post.find()
    .then((locationFromDB) => {
      res.json({ Posts: locationFromDB })
    })
    .catch(error => console.log(error));
  })

  

  module.exports = router;