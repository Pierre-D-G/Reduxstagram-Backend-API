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

chai.use(chaiHttp);

let newUser = {
    username: "Redux",
    password: '123456',
    confirmPassword: '123456',
    email: 'test@email.com',
    first_name: 'React',
    last_name: 'Reduxstagram',
    bio: "testing"
}

// Register a user

describe('Not register when a field is empty', () => {
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
        chai.request(server)
            .post('/api/register')
            .send(emptyUser)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Please fill out all fields')
                done();
            })
    })
});

describe('Not register when passwords dont match', () => {
    it('it should not register a user if the password fields dont match', (done) => {
        let emptyUser = {
            username: 'Redux',
            password: '123456',
            confirmPassword: '12345',
            email: 'test@email.com',
            first_name: 'React',
            last_name: 'Reduxstagram',
            bio: "testing"
        }
        chai.request(server)
            .post('/api/register')
            .send(emptyUser)
            .end((err, res) => {
                res.should.have.status(500);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Passwords do not match')
                done();
            })
    })
});

describe('Register user', () => {
    it('it should register a user', (done) => {
        chai.request(server)
            .post('/api/register')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('Successfully Registered')
                done();
            })
    })
});