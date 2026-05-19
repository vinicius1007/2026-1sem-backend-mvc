const usersList = require ("../data/users")

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

module.exports = {
    findAll, 
    create,
    findById 
}