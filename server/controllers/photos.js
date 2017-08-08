const User = require('../models/').user;
const Photos = require('../models/').photos;
const Likes = require('../models/').likes;
const Comments = require('../models/').comments;

module.exports = {
    async create(req, res) {
        try {
            const photo = await Photos.create({
                caption: req.body.caption,
                image_url: req.body.image_url,
                userId: req.user.userId
            });

            return res.status(200).send(photo)

        } catch (err) {
            return res.status(500).send(err)
        }
    }
}