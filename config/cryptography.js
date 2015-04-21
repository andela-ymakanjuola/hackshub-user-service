var crypto = require('crypto'),
    uuid = require('node-uuid');

module.exports = {
  hashPassword: function (password, salt) {
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
  },

  verifyPassword: function (user, provided) {
    
    return user.password === this.hashPassword(provided, user.salt);
  },

  generateSalt: function () {
    var salt = uuid.v1();
    console.log(salt);
    return salt;
  }
};