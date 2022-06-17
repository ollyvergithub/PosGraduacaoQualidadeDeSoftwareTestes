const UserApi =  require("./user-api")

describe('UserApi', () =>{

    describe("Testa método findAll", () =>{

        it('Deve retornar a lista de usuários', () =>{
            const userApi = new UserApi()

            // Sintaxe proposta pelo Jest quando estamos sem async/await
            return userApi.findAll().then(users =>{
                console.log("XXXXXXX Sucesso Usuários: ", users)
                expect(users.length).toBeGreaterThan(0)
            })
        })

    })

    describe("Testa método findOne", () =>{

        it('Deve retornar um usuário existente por id', () =>{
            const userApi = new UserApi()

            return userApi.findOne(1)
                .then(user =>{
                    console.log("XXXXXXX Sucesso Usuário: ", user)
                    expect(user.id).toBe(1)
            })
        })
        it('Deve lançar exceção para usuário inexistente', ()=>{
            const userApi = new UserApi()

            return userApi.findOne(1000000000000000).catch(exception =>{
                expect(exception.message).toBe("Not Found")
            })
        })

    })
})