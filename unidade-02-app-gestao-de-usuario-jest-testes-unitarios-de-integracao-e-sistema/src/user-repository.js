const ObjectId = require("mongodb").ObjectId;

class UserRepository{

    constructor(collection) {
        this.collection = collection
    }

    async findAll(){
        // Sem o .toArray(), estava retornando o Cursor com um monte de informação
        // const usuarios = await this.collection.find({})

        let usuarios = await this.collection.find({}).toArray()

        return usuarios
    }

    async findOneByEmail(email){
        const user = await this.collection.findOne({email})

        if (user === null){
            throw new Error(`Usuário com o email ${email} não existe!!`)
        }else {
            return user
        }
    }

    async findOneById(id){
        const user = await this.collection.findOne({ _id: ObjectId(id) })

        if (user === null){
            throw new Error(`Usuário com o id ${id} não existe!!`)
        }else {
            return user
        }
    }

    async insert(user){
        await this.collection.insertOne(user)
        return user
    }

    async update(id, user){
        //  { $set: {"email" : "alterado.com"} },
        // Resolveu o problema Update document requires atomic operators
        let atualizado = await this.collection.updateOne(
            {"_id": id},
            { $set: {"nome": user.name, "email": user.email} },
            { upsert: true }
        )

        return atualizado

    }

    async delete(id){
        return await this.collection.deleteOne({ _id: id })
    }
}

module.exports = UserRepository