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

const Photos = require('../models/').photos;

module.exports = () => {
    Photos.bulkCreate([
        {
      "caption":"Lunch #hamont",
      "userId":"5e839424-6332-4eb2-beae-85d83130693f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
   },
   {
      "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
      "userId":"5e839424-6332-4eb2-beae-85d83130693f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
   },
   {
      "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
      "userId":"5e839424-6332-4eb2-beae-85d83130693f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
   },
   {
      "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
      "userId":"5e839424-6332-4eb2-beae-85d83130693f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
   },
   {
      "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
      "userId":"891c79e7-faca-41f9-a503-2d24f932eb71",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
   },
   {
      "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
      "userId":"891c79e7-faca-41f9-a503-2d24f932eb71",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg"
   },
   {
      "caption":"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
      "userId":"891c79e7-faca-41f9-a503-2d24f932eb71",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg"
   },
   {
      "caption":"Brunchin'",
      "userId":"891c79e7-faca-41f9-a503-2d24f932eb71",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg"
   },
   {
      "caption":"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨",
      "userId":"a7a56dae-bf1b-4119-9cb7-f375a0b27124",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg"
   },
   {
      "caption":"Lekker Chocoladeletter",
      "userId":"a7a56dae-bf1b-4119-9cb7-f375a0b27124",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg"
   },
   {
      "caption":"Just discovered the #hamont farmers market has a new ramen place! 🍜",
      "userId":"a7a56dae-bf1b-4119-9cb7-f375a0b27124",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg"
   },
   {
      "caption":"⛄️",
      "userId":"a7a56dae-bf1b-4119-9cb7-f375a0b27124",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
   },
   {
      "caption":"6 page spread on flexbox in this months netmag!",
      "userId":"a7a56dae-bf1b-4119-9cb7-f375a0b27124",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
   },
   {
      "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
      "userId":"35138a95-6545-4ee8-a8a3-4fd887ae44e8",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
   },
   {
      "caption":"Today I learned that a long pull espresso is called a 'lungo'",
      "userId":"35138a95-6545-4ee8-a8a3-4fd887ae44e8",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
   },
   {
      "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
      "userId":"35138a95-6545-4ee8-a8a3-4fd887ae44e8",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
   },
   {
      "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
      "userId":"35138a95-6545-4ee8-a8a3-4fd887ae44e8",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
   },
   {
      "caption":"Some major audio upgrades coming to my next vuserIdeos 😍",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
   },
   {
      "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
   },
   {
      "caption":"It's too early. Send coffee.",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
   },
   {
      "caption":"They both have figured it out. #lifewithsnickers",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
   },
   {
      "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
   },
   {
      "caption":"Trying the new Hamilton Brewery beer. Big fan.",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
   },
   {
      "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
      "userId":"03df81c0-5b56-46bf-ba5f-b78607ecf86f",
      "image_path":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
   }
    ])
}