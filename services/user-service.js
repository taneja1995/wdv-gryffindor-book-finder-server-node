const usersDao = require("../daos/users-dao");
/*const createUser=()=>{
usersDao.createUser();
}*/

const findAllUsers = () => {
    usersDao.findAllUsers();
}
const findUserById = (uid) => {
    usersDao.findUserById(uid)

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