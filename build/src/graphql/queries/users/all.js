'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllUsers = {

    type: new _graphql.GraphQLList(_users3.UserType),
    resolve: function resolve() {
        var users = _users2.default.find().exec();
        if (!users) throw new Error("Error al traer de la bd");
        return users;
    }
};

exports.default = queryAllUsers;