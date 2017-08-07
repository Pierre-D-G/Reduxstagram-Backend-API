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

const Comments = require('../models/').comments;

module.exports = () => {
    Comments.bulkCreate([
        {
            "comment": "Totally need to try this.",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "7"
        },
        {
            "comment": "Wes. WE should have lunch.",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "1"
        },
        {
            "comment": "#adults",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "1"
        },
        {
            "comment": "yes!",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "1"
        },
        {
            "comment": "ðŸ˜ love Hamilton!",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "1"
        },
        {
            "comment": "Those are cute! They're like silver dollar pancakes.",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "4"
        },
        {
            "comment": "I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! ðŸ˜ðŸ˜›ðŸ˜â™¥ï¸",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "4"
        },
        {
            "comment": "... and apparently growing baby. ðŸ‘€. Yum.",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "4"
        },
        {
            "comment": "ðŸ‘ my daughter is a pancake eating machine!",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "4"
        },
        {
            "comment": "Nice stove!",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "4"
        },
        {
            "comment": "Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "4"
        },
        {
            "comment": "I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "4"
        },
        {
            "comment": "thanks! It's a Jenn air - so nice to cool with!",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "4"
        },
        {
            "comment": "Where would you go and for how long, if you had location freedom? - Greg ðŸŒŽ",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "4"
        },
        {
            "comment": "Looking great Wes! I'd like to see the other side of the room too.",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "3"
        },
        {
            "comment": "I've never caught your podcast. Have one right? Btw - they don't have a Canary pillow? ðŸ˜",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "3"
        },
        {
            "comment": "Great way to start the year.",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "3"
        },
        {
            "comment": "Are there 4k monitors?",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "3"
        },
        {
            "comment": "that is where I put all the junk. I'll have to clean that side too no podcast yet! ohh yeah! yep - the main one is 4K - I'm loving it",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "3"
        },
        {
            "comment": "That chrome pillow. ðŸ˜‰",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "3"
        },
        {
            "comment": "is that the Dell 4k? The MacBook Pro powers it well? I also have a Retinaâ„¢ / x1 setup as well. Very handy.",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "3"
        },
        {
            "comment": "#minimalsetups",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "3"
        },
        {
            "comment": "that is the sound of success!",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "9"
        },
        {
            "comment": "Did she get to eat her letter?",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "10"
        },
        {
            "comment": "Nope, She has too much teeth now (8) so that would definitely be her first cavity ðŸ˜‰",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "10"
        },
        {
            "comment": "A+",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "11"
        },
        {
            "comment": "I recently went to a ramen place in Philly. So amazing!",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "11"
        },
        {
            "comment": "All bundled up!  Where ya goin?",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "12"
        },
        {
            "comment": "Super congrats! That's wicked cool and looks great.",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "13"
        },
        {
            "comment": "real live paper magazine? woah haha. flex box is awesome though, could rage quit without it",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "13"
        },
        {
            "comment": "haha yes! Old school stylez!",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "13"
        },
        {
            "comment": "ðŸ‘Œ",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "15"
        },
        {
            "comment": "Nice shot, mister!",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "15"
        },
        {
            "comment": "ðŸ˜",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "16"
        },
        {
            "comment": "Very cool!",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "16"
        },
        {
            "comment": "Uhu!",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "17"
        },
        {
            "comment": "What's your lighting source?",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "18"
        },
        {
            "comment": "And what are you using for XLR mix adapter? I found a big price jump between $55 range and $170 range.",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "18"
        },
        {
            "comment": "I still need a desk boom for mine mic. Nice upgrades",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "18"
        },
        {
            "comment": "Love the coat! Where's it from? Lol",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "20"
        },
        {
            "comment": "What do we gotta do to get some :)?",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "5"
        },
        {
            "comment": "Might drop by today - real quick. Trade you an illegal pin for these? Lol.",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "5"
        },
        {
            "comment": "I'm with on this. What we gotta do? :D",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "5"
        },
        {
            "comment": "I'll post them up on my blog soon!",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "5"
        },
        {
            "comment": "Want",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "5"
        },
        {
            "comment": "want!",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "5"
        },
        {
            "comment": "#Top",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "5"
        },
        {
            "comment": "Where's lux at? ðŸ’¤?",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "22"
        },
        {
            "comment": "Love this house during the holidays! And all other times of the year...",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "22"
        },
        {
            "comment": "dogsandbrew",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "23"
        },
        {
            "comment": "Next on my list!",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "23"
        },
        {
            "comment": "Is that from collective arts ?",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "23"
        },
        {
            "comment": "that vest!!! ðŸ˜",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "24"
        },
        {
            "comment": "I just love her!",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "24"
        },
        {
            "comment": "I know! My friend gave it to her and I wanted a matching one but only Lux can pull it off. She's so fancy ðŸ˜‰",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "24"
        },
        {
            "comment": "Char has that vest!!! Super cute!",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "24"
        },
        {
            "comment": "You'll have to meet her soon!!",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "24"
        },
        {
            "comment": "Haha so true, babies these days are sooo stylish. ðŸ˜Ž",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "24"
        },
        {
            "comment": "JavaScript ðŸ˜„ðŸ˜†ðŸ™‹",
            "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
            "photoId": "24"
        },
        {
            "comment": "That hoodie is amazing! Where did you get it?",
            "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
            "photoId": "24"
        },
        {
            "comment": "I did a teespring a few months ago - maybe I'll do another one soon",
            "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
            "photoId": "24"
        },
        {
            "comment": "If you get in the mood for authentic Italian pizza, check out - it'sðŸ‘ŒðŸ»",
            "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
            "photoId": "6"
        },
        {
            "comment": "ðŸ˜± jealous",
            "userId": "5e839424-6332-4eb2-beae-85d83130693f",
            "photoId": "6"
        }
    ])
}