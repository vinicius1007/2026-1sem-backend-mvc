const usersList = require("../data/users")

const findAll = () => {
    return usersList
}

const create = (user) => {
    usersList.push(user)

    return user
}

const findById = (id) => {
    return usersList.find( user => user.id === id )
}

const update = (id, data) => {
    const user = usersList.find( user => user.id === id )

    if (!user) return null

    if(data.name){
        user.name = data.name
    }

    return user
}

const remove = (id) => {
    const index = usersList.findIndex( user => user.id === id )

    if (index === -1) return null

    const deletedUser = usersList[index]

    usersList.splice(index, 1)

    return deletedUser
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
}