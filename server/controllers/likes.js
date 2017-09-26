const User = require('../models/').user;
const Photos = require('../models/').photos;
const Likes = require('../models/').likes;
const Comments = require('../models/').comments;

module.exports = {
    async create(req, res) {
        try{
            const like = await Likes.create({
                userId: req.user.userId,
                photoId: req.params.photoId
            });

            return res.status(200).send(like)

        } catch(err) {
            return res.status(500).send(err)
        }
    }
}