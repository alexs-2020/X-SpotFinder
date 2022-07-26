const router = require("express").Router();
const Location = require("../models/Location")

router.post('/locations', (req, res, next) => {
    const { title, img, city } = req.body;

    Location.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

  router.get('/locations', (req,res) =>{
    Location.find()
    .then((localsFromDB) => {
      res.json({ Locations: localsFromDB })
    })
    .catch(error => console.log(error));
  })


  module.exports = router;