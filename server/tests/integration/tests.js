const models = require('../../models');

let expect = require('chai').expect;


/** 
 * Database insert tests
 */

describe('Database Tests', () => {
    beforeEach((done) => {
        models.sequelize.sync({ force: true }).then(() => {
            done();
        })
    });

    describe('Insert a user', () => {
        it('it should insert the details of a user into the database and return it', (done) => {
            const User = models.user;
            User.create({
                user_id: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
                username: 'Testy',
                password: 'pwtest',
                email: 'test@gmail.com',
                first_name: 'Testing',
                last_name: 'Tester',
                bio: 'I am an insert test'
            }, {
                    returning: true,
                    raw:true,
                    plain: true
                }).then(user => {
                    let createdUser = user.dataValues;
                    expect(createdUser).to.be.a('object');
                    expect(createdUser).to.have.property('user_id').equal('3c207bbb-1e87-4a3f-8cc0-f757e4d5f643');
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
    })
})