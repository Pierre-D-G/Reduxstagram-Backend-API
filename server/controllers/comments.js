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
    },

    async get(req, res){
        try {
            const comment = await Comments.find({
                where: {
                    commentId: req.params.commentId,
                }
            });

            if(!comment){
                return res.status(404).send({
                    message: 'Comment could not be found'
                })
            }

            return res.status(200).send(comment)

        } catch(err){
            return res.status(500).send(err)
        }
    }
}