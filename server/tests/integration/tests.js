const models = require('../../models');

let expect = require('chai').expect;

let newUser = {
    userId: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
    username: 'Testy',
    password: 'pwtest',
    email: 'test@gmail.com',
    first_name: 'Testing',
    last_name: 'Tester',
    bio: 'I am an insert test'
}

let newPhoto = {
    userId: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
    caption: 'This the caption of a test photo',
    image_path: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
}

let newComment = {
    comment: 'This is a test comment',
    userId: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
    photoId: '1'
}



/** 
 * Database insert tests
 */

describe('Database Tests', () => {
    beforeEach((done) => {
        models.sequelize.sync({ force: true }).then(() => {
            done();
        })
    });

    /**
     * Insert a user into database
     */
    describe('Insert a user', () => {
        it('it should insert the details of a user into the database and return it', (done) => {
            const User = models.user;
            User.create(newUser, {
                returning: true,
                raw: true,
                plain: true
            }).then(user => {
                let createdUser = user.dataValues;
                expect(createdUser).to.be.a('object');
                expect(createdUser).to.have.property('userId').equal('3c207bbb-1e87-4a3f-8cc0-f757e4d5f643');
                expect(createdUser).to.have.property('sign_up');
                expect(createdUser).to.have.property('username').equal('Testy');
                expect(createdUser).to.have.property('password');
                expect(createdUser).to.have.property('email').equal('test@gmail.com');
                expect(createdUser).to.have.property('first_name').equal('Testing');
                expect(createdUser).to.have.property('last_name').equal('Tester');
                expect(createdUser).to.have.property('bio').equal('I am an insert test');
                done();
            })
        })
    });
    /**
     *  ================== END OF INSERT USER TEST ========================
     */
    /**
     * Insert a Photo
     */
    describe('Insert photo', () => {
        it('it should insert a photo into the database', (done) => {
            const Photo = models.photos;
            const User = models.user;
            User.create(newUser).then(() => {
                Photo.create(newPhoto, {
                    returning: true,
                    plain: true,
                    raw: true
                }).then(photo => {
                    let createdPhoto = photo.dataValues;
                    expect(createdPhoto).to.be.a('object');
                    expect(createdPhoto).to.have.property('userId').equal('3c207bbb-1e87-4a3f-8cc0-f757e4d5f643');
                    expect(createdPhoto).to.have.property('image_path');
                    expect(createdPhoto).to.have.property('caption').equal('This the caption of a test photo');
                    done();
                })
            })

        })
    });
    /**
     *  ================== END OF INSERT PHOTO TEST ========================
     */
    /**
     * Insert a comment
     */
    describe('Insert a comment', () => {
        it('It should insert a comment into the database', (done) => {
            const Photo = models.photos;
            const User = models.user;
            const Comments = models.comments;

            User.create(newUser).then(() => {
                Photo.create(newPhoto).then(() => {
                    Comments.create(newComment, {
                        returning: true,
                        plain: true,
                        raw: true
                    }).then(comment => {
                        let createdComment = comment.dataValues;
                        expect(createdComment).to.be.a('object');
                        expect(createdComment).to.have.property('comment').equal('This is a test comment');
                        expect(createdComment).to.have.property('photoId').equal(1);
                        expect(createdComment).to.have.property('userId').equal('3c207bbb-1e87-4a3f-8cc0-f757e4d5f643');
                        done();
                    })
                })
            })
        })
    });
    /**
     *  ================== END OF INSERT COMMENT TEST ========================
     */
    /**
     * Insert Like into the database
     */

    describe('Insert a like', () => {
        it('it should insert a like into the database', (done) => {
            const Photo = models.photos;
            const User = models.user;
            const Likes = models.likes
            User.create(newUser).then(() => {
                Photo.create(newPhoto).then(() => {
                    Likes.create({
                        userId: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
                        photoId: '1'
                    }, {
                            returning: true,
                            plain: true,
                            raw: true
                        }).then(like => {
                            let newLike = like.dataValues;
                            expect(newLike).to.be.a('object');
                            expect(newLike).to.have.property('photoId').equal(1);
                            expect(newLike).to.have.property('userId').equal('3c207bbb-1e87-4a3f-8cc0-f757e4d5f643');
                            done();
                        })
                })
            })
        })
    })
})