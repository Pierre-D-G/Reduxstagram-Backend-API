const User = require('../models/').user;
const Photos = require('../models/').photos;
const Likes = require('../models/').likes;
const Comments = require('../models/').comments;

module.exports = {
    async create(req, res) {
        try {
            const comment = await Comments.create({
                comment: req.body.comment,
                userId: req.user.userId,
                photoId: req.body.photoId
            });

            return res.status(200).send({
                message: 'Your comment has been added successfully'
            })

        } catch (err) {
            res.status(500).send(err)
        }
    }
}