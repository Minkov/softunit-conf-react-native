'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attachTo = undefined;

var _express = require('express');

var todos = [];

var attachTo = function attachTo(app) {
    var router = new _express.Router();

    router.get('/', function (req, res) {
        res.send(todos);
    }).post('/', function (req, res) {});

    app.use('/api/todos', router);
};

exports.attachTo = attachTo;