const userModel = require("../models/userModel")

function getAllUsers(request, response) {
    const users = userModel.findAll()

    return response.json(users)
}

function createUser( req, res ) {
    // const name = req.body.name

    const { name } = req.body

    const newUser = {
        id: Date.now(),
        name: name
    }

    const createdUser = userModel.create(newUser)

    return res.status(201).json(createdUser)
}

const getUserById = (req, res) => {
    const id = Number(req.params.id)

    const user = userModel.findById(id)

    if(!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    return res.json(user)
}

const updateUser = (req, res) => {
    const id = Number(req.params.id)

    const { name } = req.body

    const newData = {
        name: name
    }

    const updatedUser = userModel.update(id, newData)

    if(!updatedUser) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    return res.json(updatedUser)
}

const deleteUser = (req, res) => {
    const id = Number(req.params.id)

    const deletedUser = userModel.remove(id)

    if(!deletedUser) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    return res.json({
        message: "Usuário removido"
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}