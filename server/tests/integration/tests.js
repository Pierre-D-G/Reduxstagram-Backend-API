const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../bin/www');
let should = chai.should();
let request = require('supertest');


chai.use(chaiHttp);

// Using supertest instead of chai for testing routes which require authentication
const authenticated = request.agent(server);

let newUser = {
    username: "Redux",
    password: '123456',
    confirmPassword: '123456',
    email: 'test@email.com',
    first_name: 'React',
    last_name: 'Reduxstagram',
    bio: "testing"
}

let dupeUsername = {
    username: "Redux",
    password: '123456',
    confirmPassword: '123456',
    email: 'test@dupeusername.com',
    first_name: 'React',
    last_name: 'Reduxstagram',
    bio: "testing"
}


// Register a user

describe('Not register when a field is empty: ', () => {
    it('it should not register a user if the username/passwords/email/names fields are empty', (done) => {
        let emptyUser = {
            username: "Redux",
            password: '123456',
            confirmPassword: '123456',
            email: '',
            first_name: 'React',
            last_name: '',
            bio: "testing"
        }
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(emptyUser)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Please fill out all fields')
                done();
            });
    });
});

describe('Not register when passwords dont match: ', () => {
    it('it should not register a user if the password fields dont match', (done) => {
        let emptyUser = {
            username: 'Redux',
            password: '123456',
            confirmPassword: '12345',
            email: 'test@passwords.com',
            first_name: 'React',
            last_name: 'Reduxstagram',
            bio: "testing"
        };
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(emptyUser)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Passwords do not match')
                done();
            });
    });
});

describe('Register user: ', () => {
    before((done) => {
        sequelize.sync({ force: true });
        done();
    });

    after((done) => {
        sequelize.sync({ force: true });
        done();
    });

    it('it should register a user', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Successfully Registered')
                done();
            });
    });
});

describe('Not register a user if email or username is in use: ', () => {
    beforeEach((done) => {
        // Register a user before each test
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(newUser)
            .end((err) => {
                done();
            })
    });

    // Dropping the table after each test so that each test can be ran accurately
    // If this isnt done then the second test below will fail because the email is already in use error
    // will be sent instead of the username is already use error since the api checks if the email is already
    // being used first
    afterEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        });
    });

    it('it should not register a user if the requested email address is already in use', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('This email address is already in use')
                done();
            })
    })

    it('it should not register a user if the requested username is already in use', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(dupeUsername)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('This username is already in use')
                done();
            })
    })
});

// Login and Logout

describe('Login User: ', () => {
    it('it should login a user if the correct credentials are sent', (done) => {
        // Registering a user before each test
        before((done) => {
            chai.request('http://localhost:3000')
                .post('/api/register')
                .send(newUser)
                .end((err) => {
                    done();
                })
        });
        // Logging out that registered user after each test
        after((done) => {
            chai.request('http://localhost:3000')
                .post('/api/logout')
                .end((err) => {
                    done();
                })
        });

        chai.request('http://localhost:3000')
            .post('/api/login')
            .send({
                username: 'Redux',
                password: '123456'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Login Successful')
                done();
            })
    });
});

describe('Dont Login User: ', () => {
    it('it should not login a user if incorrect credentials are sent', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/login')
            .send({
                username: 'React',
                password: '1234567'
            })
            .end((err, res) => {
                res.should.have.status(404);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('User not found')
                done();
            })
    });
});

describe('Logout User: ', () => {
    it('it should logout a user', (done) => {
        // Registering the user then logging them in
        before((done) => {
            chai.request('http://localhost:3000')
                .post('/api/register')
                .send(newUser).then(() => {
                    chai.request('http://localhost:3000')
                        .post('/api/login')
                        .send({
                            username: 'Redux',
                            password: '123456'
                        })
                })
                .end((err) => {
                    done();
                })
        });

        // Logging out the user user registered and logged in before the test was ran
        chai.request('http://localhost:3000')
            .post('/api/logout')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('You are successfully logged out')
                done();
            })
    });
});

describe('Get User Data: ', () => {
    it('should get the data of a user give their user id if they are registered', (done) => {
        // Getting the details of one of seeded users by passing in their userId
        let testId = "03df81c0-5b56-46bf-ba5f-b78607ecf86f";
        chai.request('http://localhost:3000')
            .get('/api/user/' + testId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('userId').eql(testId);
                res.body.should.have.property('photos');
                res.body.should.have.property('comments');
                done();
            })
    })
});

/**
 * PHOTOS TESTS
 */

describe('Create a photo', () => {
    // Logging into one of the seeded user accounts
    before((done) => {
        authenticated
            .post('/api/login')
            .send({
                username: "Jenny",
                password: "jenny"
            }).end((err, res) => {
                done();
            })
    });

    it('It should add a new photo to the database', (done) => {
        authenticated
            .post('/api/photos')
            .send({
                caption: "Lunch for today <3",
                image_path: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('caption').eql('Lunch for today <3');
                res.body.should.have.property('image_path');
                done();
            })
    })
});

describe('Unauthenticated create a photo', () => {
    it('It should add a new photo to the database', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/photos')
            .send({
                caption: "Lunch for today <3",
                image_path: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.have.property('message');
                res.body.message.should.eql('You are not authorized to perform this action.Either you are not logged in or this item doesnt belong to you');
                done();
            })
    })
});

describe('Get photo details', () => {
    it('It should get the details of a photo such as comments,likes and the user who owns it', (done) => {
        let photoId = 1;
        chai.request('http://localhost:3000')
            .get('/api/photos/' + photoId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('photoId').eql(photoId);
                res.body.should.have.property('userId');
                res.body.should.have.property('comments');
                done();
            })
    })
});

describe('Update a photo', () => {

    // Logging into one of the seeded user accounts
    before((done) => {
        authenticated
            .post('/api/login')
            .send({
                username: "Jenny",
                password: "jenny"
            }).end((err, res) => {
                done();
            })
    });

    it('It should update the details of a photo', (done) => {
        let photoId = 18; // First photo owned by logged into test account
        authenticated
            .put('/api/photos/' + photoId)
            .send({
                caption: "This is an updated test caption"
            }).end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('caption');
                res.body.should.have.property('caption').eql('This is an updated test caption');
                res.body.should.have.property('image_path');
                done();
            })
    })
});

describe('Unauthenticated photo update', () => {
    it('it should not update a photo if the user doesnt own it or isnt logged in', (done) => {
        let photoId = 18;
        chai.request('http://localhost:3000')
            .put('/api/photos/' + photoId)
            .send({
                caption: 'This photo should not be update because i am not logged in or dont own it'
            })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.have.property('message');
                res.body.message.should.eql('You are not authorized to perform this action.Either you are not logged in or this item doesnt belong to you');
                done();
            })
    })
});


describe('Delete a photo', () => {
    // Logging into one of the seeded user accounts
    before((done) => {
        authenticated
            .post('/api/login')
            .send({
                username: "Jenny",
                password: "jenny"
            }).end((err, res) => {
                done();
            })
    });
    it('It should delete a photo from the database', (done) => {
        let photoId = 18;
        authenticated
            .delete('/api/photos/' + photoId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('message').eql('Photo has been deleted');
                done();
            })
    })
});

describe('Unauthenticated photo delete', () => {
    it('it should not delete a photo if the user doesnt own it or isnt logged in', (done) => {
        let photoId = 18;
        chai.request('http://localhost:3000')
            .delete('/api/photos/' + photoId)
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.have.property('message');
                res.body.message.should.eql('You are not authorized to perform this action.Either you are not logged in or this item doesnt belong to you');
                done();
            })
    })
});

/**
 * Comments
 */

describe('Create a comment', () => {
    // Logging into one of the seeded user accounts
    before((done) => {
        authenticated
            .post('/api/login')
            .send({
                username: "Jenny",
                password: "jenny"
            }).end((err, res) => {
                done();
            })
    });

    it('it should create a comment', (done) => {
        let photoId = 1;
        authenticated
            .post('/api/photos/' + photoId + '/comments')
            .send({
                comment: "This is a test comment",
                photoId: "1"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').eql('Your comment has been added successfully');
                done();
            })
    })
});

describe('Unauthenticated create a comment', () => {
    it('it should not create a comment when a user isnt logged in', (done) => {
        let photoId = 1;
        chai.request('http://localhost:3000')
            .post('/api/photos/' + photoId + '/comments')
            .send({
                comment: "This is a test comment",
                photoId: "1"
            })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.have.property('message');
                res.body.message.should.eql('You are not authorized to perform this action.Either you are not logged in or this item doesnt belong to you');
                done();
            })
    })
});

describe('Update a comment', () => {
    it('it should update an edited comment', (done) => {
        done();
    })
});

describe('Delete a comment', () => {
    it('it should delete a requested comment', (done) => {
        done();
    })
});


