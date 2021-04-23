const Users=require('../daos/users-dao')
const usersModel = require("../models/users/users-models");
const userService = require("../daos/users-dao");

module.exports = (app) => {

    /*const createUser = (req, res) => {
         const user = new usersModel(req.body);
         user.save()
             .then( user => {
                 res.send("user saved to the database");
             })
    }*/

    const findAllUsers = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        userService.findAllUsers()
            .then((users) => {
                res.send(users)
            })
    }

    app.get("/api/users", findAllUsers);

}