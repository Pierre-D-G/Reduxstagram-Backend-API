const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/').user;
const Photos = require('../models/').photos;
const Comments = require ('../models/').comments;

const isEmptyOrNull = string => {
    return !string || !string.trim();
};

module.exports = {
    async create(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const email = req.body.email;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const bio = req.body.bio;

        if (
            isEmptyOrNull(username) ||
            isEmptyOrNull(password) ||
            isEmptyOrNull(confirmPassword) ||
            isEmptyOrNull(email) ||
            isEmptyOrNull(first_name) ||
            isEmptyOrNull(last_name)
        ) {
            return res.status(500).send({
                message: 'Please fill out all fields'
            });
        }

        if (password !== confirmPassword) {
            return res.status(500).send({
                message: 'Passwords do not match'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        try {

            const emailVerify = await User.findOne({
                where: {
                    email: email
                },
            });

            if (emailVerify) {
                return res.status(500).send({
                    message: "This email address is already in use"
                })
            };

            const usernameVerify = await User.findOne({
                where: {
                    username: username
                },
            });

            if (usernameVerify) {
                return res.status(500).send({
                    message: "This username is already in use"
                })
            };
            const user = await User.create({
                username: username,
                password: hash,
                email: email,
                first_name: first_name,
                last_name: last_name,
                bio: bio
            });
            return req.login(user, err => {
                if (!err) {
                    return res.status(200).send({
                        message: 'Successfully Registered'
                    });
                }

                return res.status(500).send({
                    message: 'Unable to Register',
                });
            });

        } catch (err) {
            return res.status(500).send({
                message: "Unable to Register"
            });
        }
    },

    login(req, res) {
        return passport.authenticate('local', (err, user, info) => {
            if (err) {
                return res.status(500).send({
                    message: 'Authentication failed, please try again',
                });
            };

            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                });
            };
            req.login(user, err => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send({
                    message: "Login Successful"
                })
            });
        })(req, res);
    },

    logout(req, res) {
        req.logout();
        return res.status(200).send({
            message: 'You are successfully logged out',
        });
    },

    async get(req, res){
        try {
            const user = await User.findById(req.params.userId, {
                attributes: {
                    exclude: ['password'],
                },
                include: [
                    {
                        model: Photos,
                        as: 'photos'
                    },
                    {
                        model: Comments,
                        as: 'comments'
                    }
                ],
                order: [['createdAt', 'DESC']],
            });

            if(!user){
                return res.status(404).send({
                    message: "User could not be found"
                })
            }

            return res.status(200).send(user)

        } catch(err){
            return res.status(500).send(err)
        }
    }
}