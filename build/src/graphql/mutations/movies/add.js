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
        data: {
            type: new _graphql.GraphQLNonNull(_movies3.MovieInputType)
        }
    },
    resolve: function resolve(root, params) {
        var movie = new _movies2.default(params.data);
        var newMovie = movie.save();
        if (!newMovie) throw new Error("Error al crear un usuario");
        return newMovie;
    }
};