require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const github = require('./routes/github');
const assignment = require('./routes/assignment');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/github', github);
app.use('/repos', assignment );

// catch 404 and forward to error handler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	return next(err);
});

// error handler
app.use((err, req, res, next) => {	
	return res.status(err.status || 500).send(err);
});

module.exports = app;
