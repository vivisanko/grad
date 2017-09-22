var express = require('express');
var router = express.Router();
var trapeziaPlace = require('../data.js');
var validator = require('./validator.js');
var fs = require('fs');


/* GET route listing. */
router.get('/', function(req, res, next) {
    console.log('route запрос');
    console.log(req.headers.token);
    console.log(req.headers.userid);
    var index =validator(req.headers.token,Number(req.headers.userid));
    if (index!==null){
        var links = {
            link1: 'https://www.youtube.com/watch?v=-JDGaEYIRz0',
            link2: 'https://www.youtube.com/watch?v=ts2jrYSsisA',
            link3: 'https://www.youtube.com/watch?v=URtCwA_4fwE&index=5&list=PLBCRwO0FN0zPOIjDgeCBMhrLrc69kOYzm'
        };
        res.json(links);
    } else  res.jsonp({error: 'Вы не прошли авторизацию'});

});

module.exports = router;
