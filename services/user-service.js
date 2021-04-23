const usersDao = require("../daos/users-dao");
/*const createUser=()=>{
usersDao.createUser();
}*/

const findAllUsers = () => {
    usersDao.findAllUsers();
}
const findUserById = (userId) => {
    usersDao.findUserById(userId)

}
const updateUser = (userId) =>{
    usersDao.updateUser(userId)
}
const deleteUser = (userId) =>{
    usersDao.deleteUser(userId)
}

module.exports ={
    findUserById, findAllUsers,updateUser,deleteUser
}