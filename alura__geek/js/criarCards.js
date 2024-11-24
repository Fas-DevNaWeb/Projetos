import { conecxoesApi } from "./conecxoesApi.js"

const produtos = await conecxoesApi.listadeProdutos()

const containerDosCards = document.querySelector("[corpo-cards]")


function card(imagem, nome, valor) {
    const objCard = document.createElement('div')
    objCard.className = 'card'
    objCard.innerHTML = `<div class="card__imagem">
                             <img src="${imagem}" class="imagem-do-card"></div>
                             <p class="card__nome">${nome}</p>
                         <div class="card__linhaPreco">
                             <p class="card__preco">${valor}</p>
                            <button class="deletar-card"></button>
                         </div>`
    return objCard
}

produtos.forEach(element => {
    const valor = Number.parseInt(element.valor)
    const valorConvertido = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    containerDosCards.appendChild(card(element.imagem, element.nome, valorConvertido))
})

const deletarCard = document.querySelectorAll('.deletar-card')

const cardEmquestao = conecxoesApi.listadeProdutos()


deletarCard.forEach((element, indice) => {
    element.addEventListener('click', () => {
        const teste = cardEmquestao.then(r => {
            conecxoesApi.removerProdutos(r[indice].id)
        })
    })
})


export const criarCards = {
    card
}