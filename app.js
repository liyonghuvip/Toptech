/**
 * Created by SailorMoonS on 8/24/2016.
 * @Description: The main file of code to start with.
 */

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');


// routes
let routes = require('./routes/index');

// database
let mongoose = require('mongoose');

// express
let app = express();

//app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((rea, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send(err.message);
        res.send(err)
    })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message)
});

module.exports = app;