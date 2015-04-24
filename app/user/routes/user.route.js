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

router.route('/users/:username')

  .get(User.read)

  .put(parseUrlencoded, User.update)

  .delete(User.delete);

router.route('/authenticate')
  .get(User.auth);

module.exports = router;