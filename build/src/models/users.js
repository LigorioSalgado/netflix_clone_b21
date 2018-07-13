'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({

    "name": {
        type: String,
        required: true
    },
    "lastname": {
        type: String,
        required: true
    },

    "email": {
        type: String,
        required: true

    },
    "password": {
        type: String,
        required: true
    },
    "photo": {
        type: String
    },
    "is_admin": {
        type: Boolean,
        default: false
    },
    "create_at": {
        type: Date,
        default: new Date()
    },
    "is_active": {
        type: Boolean,
        default: true
    },
    "client_id": {
        /*Este es para el procesador de pagos */
        type: String
    }
}, { collection: "Users", timestamps: true });

UserSchema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) {
        return next();
    }

    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        cb(null, isMatch);
    });
};

exports.default = _mongoose2.default.model('Users', UserSchema);