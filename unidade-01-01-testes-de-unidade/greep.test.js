const greet = require('./greeting')

describe("Saudação", () => {

    test('Saudar a pessoa com o nome de Ollyver - Falhar', ()=>{
        expect(greet('Ollyver')).not.toBe('Foo')
    })

    it('Deve pasar com o nome de Ollyver', function () {
        expect(greet('Ollyver')).toBe('Olá Ollyver, seja bem vindo ao curso de Qualidade de Software Para Web e Testes')
    });

    // Forma de implementar um teste vazio, como o pass do Python
    it.todo("Implementando um teste vazio, como o pass do Python")

    it("Saudar um nome vazio deve gerar uma exceção", () =>{
        const execution = () => greet('')
        expect(execution).toThrow()
    })

})