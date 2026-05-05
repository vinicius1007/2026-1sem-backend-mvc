const userModel = require ("../models/userModel")

function getAllUsers(request, response) {
    const users = userModel.findAll ()

   return response.json(users)
    
}

module.exports = {
    getAllUsers
}