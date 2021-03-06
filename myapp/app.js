var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

// var validator = require('./routes/validator');

var users = require('./routes/users');
var logon = require('./routes/logon');
var profile = require('./routes/profile');
var scores = require('./routes/scores');
var rating = require('./routes/rating');
var route = require('./routes/route');
var passedroute = require('./routes/passedroute');
var randomroute = require('./routes/randomroute');
var theory = require('./routes/theory');
var exit = require('./routes/exit');
var trapeziaPlace = require('./data.js');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/logon', logon);
app.use('/profile', profile);
app.use('/scores', scores);
app.use('/rating', rating);
app.use('/route', route);
app.use('/randomroute', randomroute);
app.use('/passedroute', passedroute);
app.use('/theory', theory);
app.use('/exit', exit);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3000, function () {

    console.log(`Example app listening on port 3000! ${new Date().toLocaleString()}`);

});



module.exports = app;
