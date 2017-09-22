var express = require('express');
var router = express.Router();
var trapeziaPlace = require('../data.js');
var validator = require('./validator.js');
var fs = require('fs');


/* GET route listing. */
router.get('/', function (req, res, next) {
    console.log('route запрос');
    console.log(req.headers.token);
    console.log(req.headers.userid);
    var index =validator(req.headers.token,Number(req.headers.userid));
    if (index!==null) {
            var shape = {
            name: trapeziaPlace.users[index].name,
            experiens: trapeziaPlace.users[index].experiens,
            duration: trapeziaPlace.users[index].duration
        };
        res.json(shape);
    } else res.json({error: 'Вы не прошли авторизацию'});

});

module.exports = router;
