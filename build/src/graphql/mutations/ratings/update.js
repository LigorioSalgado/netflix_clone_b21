'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _ratings = require('../../../models/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _ratings3 = require('../../types/ratings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _ratings3.RatingType,
    args: {
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: "data",
            type: new _graphql.GraphQLNonNull(_ratings3.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _ratings2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (rating) {
            return rating;
        }).catch(function (err) {
            throw new Error("Error al hacer update");
        });
    }
};