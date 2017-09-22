var express = require('express');
var fs = require('fs');
var path = require('path');
var trapeziaPlace = require('../data.js');


var validator = function (token, id) {
    var index = trapeziaPlace.usersId.indexOf(id);
    if (trapeziaPlace.users[index].token === token) {
        return index;
    }
    return null;
};


module.exports = validator;