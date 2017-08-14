const User = require('../models/').user;
const Photos = require('../models/').photos;
const Likes = require('../models/').likes;
const Comments = require('../models/').comments;

module.exports = {
    async create(req, res) {
        try {
            const photo = await Photos.create({
                caption: req.body.caption,
                image_path: req.body.image_path,
                userId: req.user.userId
            });
            return res.status(200).send(photo)

        } catch (err) {
            return res.status(500).send(err)
        }
    },

    async get(req, res) {
        try {
            const photo = await Photos.findById(req.params.photoId, {
                include: [
                    {
                        model: Comments,
                        as: 'comments',
                        include: [
                            {
                                model: User,
                                attributes: {
                                    exclude: ['userId', 'first_name', 'last_name', 'email', 'bio', 'sign_up', 'password', 'bio']
                                }
                            }
                        ]
                    }
                ]
            });
            if (!photo) {
                return res.status(404).send({
                    message: 'Photo could not be found'
                })
            }

            return res.status(200).send(photo)

        } catch (err) {
            return res.status(500).send(err)
        }
    },

    async update(req, res) {
        try {
            const photo = await Photos.find({
                where: {
                    photoId: req.params.photoId,
                    userId: req.user.userId
                },
            });

            if (!photo) {
                return res.status(404).send({
                    message: 'Photo could not be found'
                })
            }

            const updatedPhoto = await photo.update({
                caption: req.body.caption || photo.caption,
                image_path: req.body.image_path || photo.image_path
            });
            return res.status(200).send(updatedPhoto);

        } catch (err) {
            return res.status(500).send(err)
        }
    },

    async delete(req, res) {
        try {
            const photo = await Photos.find({
                where: {
                    photoId: req.params.photoId,
                    userId: req.user.userId
                }
            });

            if(!photo){
                return res.status(404).send({
                    message: 'Photo could not be found'
                });
            }

            await photo.destroy();

            return res.status(200).send({
                message: "Photo has been deleted"
            });

        } catch (err) {
            return re.status(500).send(err)
        }
    }
}