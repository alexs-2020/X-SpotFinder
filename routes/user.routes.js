const router = require("express").Router();
const User = require("../models/User.model")

router.post('/users/:id/uploads', (req, res)=>{
    let url = req.body.uploads
    let id = req.params.id
    console.log(id)
    User.findByIdAndUpdate(id, {$push: {uploads: url }})
    .then(user =>{ 
        res.json(user)
    })
  })
  
router.get('/users/:id', (req, res)=>{
    let id = req.params.id
    console.log(id)
    User.findById(id)
    .then(user =>{ 
        res.json(user)
    })
  })

  module.exports = router;