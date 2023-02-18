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

  // router.post('/posts/:id/delete', (req,res) => {
  //   const id = req.params.id
  //   Post.findByIdAndDelete(id)
  //   .then(result => { 
  //     res.redirect('/feed')
  //   })
  //   .catch(error => next(error));
  // })
  
  router.post('/postsbyurl', (req, res) => {
     const url = req.body.url
     console.log(url)
    Post.find({url: url})
    .then((response) => {
      res.json(response)
      console.log(response)
    })
    // .then((postFromDB) => {
    //   console.log('made it?')
    //   res.json(postFromDB)
    // })
    .catch(error => next(error));
  })
  
  module.exports = router;