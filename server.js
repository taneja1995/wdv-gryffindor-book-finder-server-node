// TODO: review https://expressjs.com/
/*const dotenv = require("dotenv").config()*/
const express = require('express')
const app = express()
const password = process.env.PASSWORD
const username = process.env.USER

const mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost:27017/whiteboard',*/
mongoose.connect(`mongodb+srv://webDevSp01:webDev2021@cluster0.37oxe.mongodb.net/readers_nest?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true});

/*const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))*/

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




//configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/user-controllers")(app)

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});