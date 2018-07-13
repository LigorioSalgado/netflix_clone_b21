'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _movies = require('../../../models/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllMovies = {

    type: new _graphql.GraphQLList(_movies3.MovieType),
    resolve: function resolve() {
        var movies = _movies2.default.find().exec();
        if (!movies) throw new Error("Error al traer de la bd");
        return movies;
    }
};

exports.default = queryAllMovies;