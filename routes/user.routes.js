const router = require("express").Router();
const User = require("../models/User.model")

router.post('/user', (req, res, next) => {
    const { pic } = req.body;

    User.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

  router.get('/users', (req,res) =>{
    User.find()
    .then((localsFromDB) => {
      res.json({ Locations: localsFromDB })
    })
    .catch(error => console.log(error));
  })

  
router.get('/userProfile', (req,res)=>{
    let username = req.session.currentUser.username
    console.log(req.session.currentUser)
    User.findOne({username})
    .then(user =>{ 
      res.render('userProfile', { user });
    })
  })

  module.exports = router;