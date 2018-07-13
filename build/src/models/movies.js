"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MovieSchema = new Schema({

    "name": {
        type: String,
        required: true
    },
    "plot": {
        type: String,
        required: true
    },
    "genre": {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    "url": {
        type: String,
        required: true
    },
    "director": {
        type: String,
        required: true
    },
    "year": {
        type: String
    },
    "rate": {
        type: [Number]

    },
    "rating": {
        type: Schema.Types.ObjectId,
        ref: "Rating"
    },
    "is_active": {
        type: Boolean,
        default: true
    },
    "upload_at": {
        type: Date,
        default: new Date()
    }

}, { collection: "Movies", timestamps: true });

exports.default = _mongoose2.default.model('Movies', MovieSchema);