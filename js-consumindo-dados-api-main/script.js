/**
 * O corpo da resposta de uma requisição chega em formato de bytes. 
 * Desta forma o .json() transforma o corpo e retorna um json formatado. 
 * O formato JSON (JavaScript Object Notation) possui basicamente a mesma 
 * sintaxe que a de um objeto JS.
 */

/**
// Aqui você esta fazendo a requisição da promise
const cepRecebido = fetch('http://viacep.com.br/ws/01001000/json/')

    // Aqui você pega a resposta da promessa e converte para um formato JSON()
    .then(response => response.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse cep não existe')
        } else {
            console.log(r)
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => {
        console.log('Processamento concluido')
    })
*/


/*
let ceps = ['01001000','01001001']
let conjuntosCeps = ceps.map(valores => buscarCep(valores))
Promise.all(conjuntosCeps).then(respostas => console.log(respostas))
buscarCep()
*/


// OUTRA MANEIRA DE FAZER CODIGO ASSINCRONO

// async indica que essa é uma função assincrona
async function buscarCep(cep) {
    try { // Envolve todo código que esta correto
        const consultarCep = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        const constresposta = await consultarCep.json()
        if (constresposta.erro) {
            throw Error('CEP não Existe :(')
        }
        const cidade = document.getElementById9('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = constresposta.cidade
        logradouro.value = constresposta.endereco
        estado.value = constresposta.uf

        console.log(constresposta)
        return constresposta
    } catch (erro) {//Envolve o código de erro
        console.log(erro)
    }
}

const cep = document.querySelector('#cep')
cep.addEventListener('focusout', () => buscarCep(cep.value))
