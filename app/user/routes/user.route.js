var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    User = require('../controllers/user.controller');

router.route('/')

  .post(parseUrlencoded, User.create)

  .get(User.readAll);

router.route('/:user_id')

  .get(User.read)

  .put(User.update)

  .delete(User.delete);

module.exports = router;