const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();



const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

require('./server/auth')(app, passport);

// Get our API routes
const user = require('./server/controllers/user');

// Set our api routes

app.post('/api/register', user.create);
app.post('/api/login', user.login);

app.get('*', (req, res) => {
  res.status(200).send({message: "Welcome to the Reduxstagram API"})
});

module.exports = app 
