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
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        },
        data: {
            name: "data",
            type: (0, _graphql.GraphQLNonNull)(_movies3.RateMovieType)
        }
    }, resolve: function resolve(root, params) {
        var id = params.id,
            data = params.data;

        return _movies2.default.findByIdAndUpdate(id, { $push: { rate: data.rate } }).then(function (movie) {
            return _movies2.default.findById(movie.id).exec();
        });
    }
};