const twoSum = require('./two-sum-problem')

describe("Testando função Two Sum Problem", ()=>{

     // **** Forma de executar apenas esse teste
    // it.only('0, [] deve gerar exceção' , () => {
    //     const execution = () => twoSum(0, [])
    //     expect(execution().toThrow('Array deve conter pelo menos dois números'))
    // });

    it('0, [] deve gerar exceção' , () => {
        const execution = () => twoSum(0, [])
        expect(execution).toThrow('Array deve conter pelo menos dois números')
    });

    it('0, [0] deve gerar exceção' , () => {
        const execution = () => twoSum(0, [0])
        expect(execution).toThrow('Array deve conter pelo menos dois números')
    });

    it('0, [0, 0] deve retornar [0, 0]' , () => {
        expect(twoSum(0, [0, 0])).toStrictEqual([0, 0])
    });

    it('1, [0, 1] deve retornar [0, 1]' , () => {
        expect(twoSum(1, [0, 1])).toStrictEqual([0, 1])
    });

    it('1, [1, 0] deve retornar [1, 0]' , () => {
        expect(twoSum(1, [1, 0])).toStrictEqual([1, 0])
    });

    it('5, [1, 2, 3, 4, 5] deve retornar [1, 4]' , () => {
        expect(twoSum(5, [1, 2, 3, 4, 5])).toStrictEqual([2, 3])
    });

    it('5, [1, 3, 8, 10] deve retornar []' , () => {
        expect(twoSum(5, [1, 3, 8, 10])).toStrictEqual([])
    });

})