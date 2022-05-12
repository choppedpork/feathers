const bcrypt = require('bcryptjs');

const BCRYPT_WORK_FACTOR = 10;

module.exports = function hasher (password) {
  return new Promise((resolve, reject) => {

    bcrypt.genSalt(BCRYPT_WORK_FACTOR, function (error, salt) {
      if (error) {
        return reject(error);
      }

      bcrypt.hash(password, salt, function (error, hashedPassword) {
        if (error) {
          return reject(error);
        }

        resolve(hashedPassword);
      });
    });
  });
};
