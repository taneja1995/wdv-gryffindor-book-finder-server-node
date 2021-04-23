const usersModel = require('../models/users/users-models')

const findAllUsers = () => usersModel.find()
const findUserById = (userId) => usersModel.findById(userId)
const createUser = () => usersModel.create()
const updateUser= (userId) => usersModel.findByIdAndUpdate(userId)
const deleteUser= (userId) => usersModel.findByIdAndRemove(userId)

module.exports = { findAllUsers, findUserById,createUser,updateUser,deleteUser }