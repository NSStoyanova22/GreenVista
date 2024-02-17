require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, "b27add612341afbe4649540ad703ef1e9092e2bc6acfcc06ee03c7fcefbe03cf", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};