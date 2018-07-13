'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _genres3.GenreType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_genres3.GenreInputType)
        }
    },
    resolve: function resolve(root, params) {
        var genres = new _genres2.default(params.data);
        var newGenre = genres.save();
        if (!newGenre) throw new Error("Error al crear un usuario");
        return newGenre;
    }
};