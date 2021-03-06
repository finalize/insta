var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", indexRouter);
app.use("/photos", usersRouter);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = app;
