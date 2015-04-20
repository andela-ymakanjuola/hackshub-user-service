var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    User = require('../controllers/user.controller');

router.route('/signup')

  .post(parseUrlencoded, User.create);

router.route('/users')

  .get(User.readAll);

router.route('/login')
  .post(User.login)

router.route('/user/:username')

  .get(User.read)

  .put(parseUrlencoded, User.update)

  .delete(User.delete);

module.exports = router;