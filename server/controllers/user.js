const bcrypt = require('bcrypt');

const User = require('../models/').user;

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
            const user = await User.create({
                username: username,
                password: hash,
                email: email,
                first_name: first_name,
                last_name: last_name,
                bio: bio
            });
            return res.status(200).send({
                message: 'Successfully Registered'
            });

        } catch (err) {
            return res.status(500).send({
                message: "Unable to Register"
            }, err);
        }
    }
}