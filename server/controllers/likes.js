const User = require('../models/').user;
const Photos = require('../models/').photos;
const Likes = require('../models/').likes;
const Comments = require('../models/').comments;

module.exports = {
    async create(req, res) {
        try{
            const alreadyLiked = await Likes.findOne({
                where: {
                    userId: req.user.userId,
                    photoId: req.params.photoId
                }
            });

            if(alreadyLiked){
                return res.status(403).send({
                    message: 'You have already liked this photo'
                })
            }

            const like = await Likes.create({
                userId: req.user.userId,
                photoId: req.params.photoId
            });

            return res.status(200).send(like)

        } catch(err) {
            return res.status(500).send(err)
        }
    },

    async delete(req, res){
        try {
            const deleteLike = await Likes.findOne({
                where: {
                    userId: req.user.userId,
                    photoId: req.params.photoId
                }
            });

            if(!deleteLike){
                return res.status(404).send({
                    message: 'You have never liked this photo'
                })
            }

            await deleteLike.destroy();

            return res.status(200).send({
                message: 'Unliked'
            });

        } catch(err){
            return res.status(500).send(err)
        }
    }
}