var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    User = require('../controllers/user.controller');

router.route('/signup')

  .post(parseUrlencoded, User.create);

router.route('/')

  .get(User.readAll);

router.route('/:username')

  .get(User.read)

  .put(User.update)

  .delete(User.delete);

module.exports = router;