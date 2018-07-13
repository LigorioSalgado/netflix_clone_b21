'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _movies = require('../../../models/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _movies3.MovieType,
    args: {
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedMovie = _movies2.default.findByIdAndRemove(params.id).exec();
        if (!deletedMovie) throw new Error("Error al borrar usuario");
        return deletedMovie;
    }
};