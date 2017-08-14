const expressSession = require('cookie-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
require('dotenv').config();

const User = require('./models/').user;

module.exports = (app, passport) => {
  const newExpressSession = expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 60000,
    },
  });

  app.use(newExpressSession);
  app.use(passport.initialize());
  app.use(passport.session());

  const newLocalStrategyOptions = {
    usernameField: 'username',
    passwordField: 'password',
    session: true,
  };
  const newLocalStrategy = new Strategy(
    newLocalStrategyOptions,
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          where: {
            username: username,
          },
        });

        if (!user) {
          return done(null, false, {
            message: 'Incorrect login credentials.',
          });
        }
        const hashed = bcrypt.compare(password, user.password);
        if (hashed) {
          return done(null, user);
        }

        return done(null, false, {
          message: 'Incorrect credentials.',
        });
      } catch (err) {
        done(null, false, {
          message: 'Failed',
        });
      }
    }
  );

  passport.use(newLocalStrategy);

  passport.serializeUser((user, done) => {
    return done(null, user.userId);
  });

  passport.deserializeUser(async (req, userId, done) => {
    try {
      const user = await User.findOne({
        where: {
          userId: userId,
        },
      });

      if (!user) {
        return done(new Error('Incorrect ID'));
      }

      return done(null, user);
    } catch (err) {
      return done(null, false, { message: 'Failed' });
    }
  });
};