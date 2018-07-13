'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _users3.UserType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_users3.UserInputType)
        }
    },
    resolve: function resolve(root, params) {
        var user = new _users2.default(params.data);
        var newUser = user.save();
        if (!newUser) throw new Error("Error al crear un usuario");
        return newUser;
    }
};