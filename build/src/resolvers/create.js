'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiresIn = "1d";
var secret = "samplejwtnetflix";
var tokenPrefix = "JWT";

var createToken = exports.createToken = function createToken(email, password) {

    if (!email || !password) {
        return false;
    }

    console.log(email, password);
    var user = _users2.default.findOne({ 'email': email }).then(function (user) {
        console.log(user);
        var compare = new Promise(function (resolve, reject) {

            user.comparePassword(password, function (err, isMatch) {
                console.log(isMatch);
                if (isMatch) {
                    var payload = {
                        email: user.email,
                        id: user._id
                    };
                    var token = _jsonwebtoken2.default.sign(payload, secret, { expiresIn: expiresIn });

                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });

        return compare;
    }).catch(function (err) {
        return err;
    });

    return user;
};