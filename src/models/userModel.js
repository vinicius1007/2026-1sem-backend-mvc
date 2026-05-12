const usersList = require ("../data/users")

const findAll = () => {
    return usersList 
}

const create = (user) => {
    usersList.push(user)

    return user
}

module.exports = {
    findAll, 
    create 
}