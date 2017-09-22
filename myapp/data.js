/**
 * Created by ALEX on 01.08.2017.
 */
var express = require('express');
var fs = require('fs');
var path = require('path');

class Place {
    constructor(pathToUsers, pathToRoutes) {
        this.users = JSON.parse(fs.readFileSync('./myapp/profile.json').toString()),
            this.routes = JSON.parse(fs.readFileSync('./myapp/routes.json').toString()),
            this.usersId = this.users.map(it => it.id)
    };

}

var trapeziaPlace = new Place('./myapp/profile.json','./myapp/routes.json');

console.log(trapeziaPlace.usersId);
console.log(trapeziaPlace);


module.exports = trapeziaPlace;