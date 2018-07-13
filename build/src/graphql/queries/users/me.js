'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../types/users');

exports.default = {
    type: _users.UserType,
    resolve: function resolve(root, params, context) {
        return context.user;
    }
};