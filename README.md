# Reduxtagram API
> Instagram API clone

An API created to clone a portion of Instagram's backend.

## Test-Driven Development Philosophy

## Developing

### Built With


* Node v6.10.0
* Express v4.15.3
* PostgreSQL v9.6
* Sequelize v4.2.1 as ORM

### Prerequisites

[Node](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/)


### Setting up Dev

```shell
Download or clone the repostisory
git clone https://github.com/Pierre-D-G/Reduxstagram-API.git
cd Reduxtagram API/
npm install to install dependancies
```

## Tests

### Test Suite

* Mocha v2.4.5 as test runner
* Chai v^3.5.0 as assertion library
* Chai-http v^2.0.1 for making Http requests to api

### Example Test

```shell
 Todo
```

## Api Reference

## Database

Database used - [PostgreSQL v9.6](https://www.postgresql.org/)

## Database Design

### Table: photos

photo_id: Integer, Primary ID that  auto increments

user_id: Integer, ID of the user who owns this photo (Indexed field)

caption: String, Photo caption

image_path: String, Path to image

date_created: DateTime, When was this image created?

date_updated: DateTime, Last time this image was updated?

### Table: comments

comment_id: Integer, Primary ID that  auto increments

comment: Text, a text field containing the comment

Table photos_comments

photo_id: Integer, ID of the photo

comment_id: Integer, ID of the comment being assigned to a photo

### Table: Likes

user_id: Integer, ID of the user performing the like (Indexed field)

photo_id: Integer, ID of the photo being liked (Indexed field)

### Table: Users

user_id: Integer, Primary ID that preferably auto increments

username: String, Username (Unique Index)

email: String, Email address (Unique Index)

salted_password: String, Salted password

first_name: String, First name of user

last_name: String, Last name of user

date_created: DateTime, When did this user sign up?

date_updated: DateTime, Last time this user was updated?

## Development Path

> Database
    * Create database
    * Create Tables
        -   Sequelize Models
            -   Model Associations

> Tests
    * To be created for each route handler

> Route Handlers
    * Authentication
        * Login
        * Logout
    
    * User
        * Get a User's Own Data - for user profile
        * Create a User - Sign Up
        * Get User By Id

    * Photos
        * Get a User's Photos
        * Upload a Photo

    * Comments
        * Create a Comment
        * Get a User's Comments
        * Get a Photo's Ccomments

    * Likes
        * Create a Like
        * Get a User's Likes
        * Get a Photo's Likes

## Licensing

MIT