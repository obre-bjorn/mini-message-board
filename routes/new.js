const express = require('express');
const router = express.Router();

let messages = require('./index').messages;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', {title: 'Add Message'});
});


router.post('/', function(req,res,next){
  console.log(req.body)
  messages.push({user: req.body.user, text: req.body.message, added: new Date()})
  console.log(messages)
  res.redirect('/')
})

module.exports = router;
