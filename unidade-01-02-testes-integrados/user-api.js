const superagent = require("superagent")

class UserApi{

    findAll() {

        return new Promise((res, rej) => {
            return superagent.get('https://jsonplaceholder.typicode.com/users')
                .then(response => res(response.body))
                .catch(rej)
        })

    }

    findOne(id){
        return new Promise((res, rej) => {
            return superagent.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => res(response.body))
                .catch(rej)
        })
    }
}

module.exports = UserApi