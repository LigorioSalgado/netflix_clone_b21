'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RateMovieType = exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var _genres = require('./genres');

var _ratings = require('./ratings');

var _genres2 = require('../../models/genres');

var _genres3 = _interopRequireDefault(_genres2);

var _ratings2 = require('../../models/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieType = exports.MovieType = new _graphql.GraphQLObjectType({

    name: "ListMovies",
    description: "Usuarios de la BD",
    fields: function fields() {
        return {

            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            plot: {
                type: _graphql.GraphQLString
            },
            genre: {
                type: _genres.GenreType,
                resolve: function resolve(movie) {
                    var genre = movie.genre;

                    return _genres3.default.findById(genre).exec();
                }
            },
            url: {
                type: _graphql.GraphQLString
            },
            director: {
                type: _graphql.GraphQLString
            },
            year: {
                type: _graphql.GraphQLString
            },
            rate: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLFloat)
            },
            rating: {
                type: _ratings.RatingType,
                resolve: function resolve(movie) {
                    var rating = movie.rating;

                    return _ratings3.default.findById(rating).exec();
                }
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            upload_at: {
                type: _graphql.GraphQLString
            }
        };
    }

});

var MovieInputType = exports.MovieInputType = new _graphql.GraphQLInputObjectType({

    name: "addMovies",
    description: "agrega o modifica peliculas en la BD",
    fields: function fields() {
        return {

            name: {
                type: _graphql.GraphQLString
            },
            plot: {
                type: _graphql.GraphQLString
            },
            genre: {
                type: _graphql.GraphQLString
            },
            url: {
                type: _graphql.GraphQLString
            },
            director: {
                type: _graphql.GraphQLString
            },
            year: {
                type: _graphql.GraphQLString
            },
            rating: {
                type: _graphql.GraphQLString
            }
        };
    }

});

var RateMovieType = exports.RateMovieType = new _graphql.GraphQLInputObjectType({
    name: "addRate",
    description: "Agrega rate a Movie",
    fields: function fields() {
        return {
            rate: {
                type: _graphql.GraphQLFloat
            }
        };
    }
});