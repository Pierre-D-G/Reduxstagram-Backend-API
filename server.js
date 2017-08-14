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
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

require('./server/auth')(app, passport);

const user = require('./server/controllers/user');
const photo = require('./server/controllers/photos');

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(403).send({
      message: 'Not Authenticated',
    });
  }
};

app.post('/api/register', user.create);
app.post('/api/login', user.login);
app.post('/api/logout', user.logout);

app.get('/api/user/:userId', user.get);

app.post('/api/photos', authMiddleware, photo.create)
app.get('/api/photos/:photoId', photo.get)

app.get('*', (req, res) => {
  res.status(200).send({ message: "Welcome to the Reduxstagram API" })
});

module.exports = app 
