# Reduxstagram API
> Reduxstagram Backend API for Wesbro' Learn Redux course

An API created for Wesbos' [Learn Redux][https://learnredux.com/] to simulate a real backend api to retrieve data from instead of json files.

## Developing

### Built With


* Node v8.2.1
* Express v4.15.3
* PostgreSQL v9.6
* Sequelize v4.2.1 as ORM
* A test driven development approach

### Prerequisites

[Node](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/)


### Setting up Dev

1. Download or clone the repository

```shell
git clone https://github.com/Pierre-D-G/Reduxstagram-API.git
```

2. cd to Reduxtagram API/ or navigate to the root of the repository

3. Create a database in PostgreSQL with the name of your choosing

4. Create a .env file in the root directory of the repository with the format:

```shell
DB= <the name of the database you created>
DB_HOST=localhost
DB_USER= <Username of the owner of the database>
DB_PASS= <Password of the owner of the database>
SESSION_SECRET=reduxtagram
```
5. Run `npm install` to install dependancies

6. Run `npm start` to start the server

## Tests

* run `npm run test-unit` to run the integration tests which test database input/output

* run `npm run test-integration` to run the units tests which test the API endpoints

### Test Suite

* Mocha v2.4.5 as test runner
* Chai v^3.5.0 as assertion library
* Chai-http v^2.0.1 for making Http requests to api
* Supertest  v^3.0.0 for making Http requests to routes which require authentication

### Example Integration Test

```shell
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

describe('Not register a user if email or username is in use: ', () => {
    beforeEach((done) => {
        chai.request('http://localhost:3000')
            .post('/api/register')
            .send(newUser)
            .end((err) => {
                done();
            })
    });

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

```

### Example Unit Test

```shell

let newUser = {
    userId: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
    username: 'Testy',
    password: 'pwtest',
    email: 'test@gmail.com',
    first_name: 'Testing',
    last_name: 'Tester',
    bio: 'I am an insert test'
},

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
```

## Api Reference

## Database

Database used - [PostgreSQL v9.6](https://www.postgresql.org/)

## Database Design

### Table: photos

photoId: Integer, Primary ID that  auto increments

userId: UUID, ID of the user who owns this photo (Indexed field)

caption: String, Photo caption

image_path: String, Path to image

date_created: DateTime, When was this image uploaded?

### Table: comments

comment: Text, a text field containing the comment

photoId: Integer, ID of the photo

userId: UUID, ID of user who commented

### Table: Likes

userId: UUID, ID of user who liked (Indexed field)

photoId: Integer, ID of the photo being liked (Indexed field)

### Table: Users

user_id: UUID, Primary ID 

username: String, Username (Unique Index)

email: String, Email address (Unique Index)

salted_password: String, Salted password

bio: Text, user bio

first_name: String, First name of user

last_name: String, Last name of user

sign_up: DateTime, When did this user sign up?

## Development Path

> Database

    * Create database
    * Create Tables
        -   Sequelize Models
            - ~~users~~
            - ~~photos~~
            - ~~comments~~
            - ~~likes~~
             *   ~~Model Associations~~

> Tests

    * To be created for each route handler
    * ~~To be created for database Input/Output~~

> Route Handlers

    * ~~Authentication~~
        * ~~Login~~
        * ~~Logout~~
    
    * User
        * ~~Get a User's Own Data - for user profile~~
        * ~~Create a User - Sign Up~~
        * ~~Get User By Id~~

    * Photos
        * ~~Get a Photo by id~~
        * ~~Upload a Photo~~
        * ~~Update a photo~~
        * ~~Delete a photo~~

    * Comments
        * ~~Create a Comment~~
        * ~~Get a specific Comment~~
        * ~~Update a Comment~~
        * ~~Delete a Comment~~

    * Likes
        * Create a Like
        * ~~Get a Photo's Likes~~
        * delete a Like

## Licensing

MIT