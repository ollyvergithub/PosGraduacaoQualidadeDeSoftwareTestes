const greet = (name) => {

    if (name.length === 0){
        throw Error('Argumento nome não pode ser vazio')
    }

    return `Olá ${name}, seja bem vindo ao curso de Qualidade de Software Para Web e Testes`

}

module.exports = greet