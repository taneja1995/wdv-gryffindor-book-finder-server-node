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
    }
*/
    const findAllUsers = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        userService.findAllUsers()
            .then((users) => {
                res.send(users)
            })
    }

    const findUserById = (req, res) => {
        const userId = req.params['uid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        userService.findUserById(userId)
            .then((user) => {
                res.send(user)
            })
    }

    const updateUser=(req,res)=>{
        const userId=req.params['uid'];
        if(userId==!null){
            userService.updateUser(userId)
                .then((user)=>{
                    res.send(user)
                })
        }
        else{
            alert('No such user exists');
        }

    }

    const deleteUser=(req,res) =>{
        const userId=req.params['uid'];
        if(userId==!null){
            userService.deleteUser(userId)
                .then(()=>{
                    res.send("Deleted Successfully");
                })
        }
        else{
            alert('No such user exists');
        }
    }

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:uid",findUserById);
    app.put("/api/users/:uid/update",updateUser);
    app.delete("/api/users/:uid/delete",deleteUser);

}