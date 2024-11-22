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
    containerDosCards.appendChild(card(element.imagem, element.nome, element.valor))
});

//console.log(produtos)


const teste = document.querySelectorAll('.deletar-card')

teste.forEach(element => {
    element.addEventListener('click', () => {
      
        conecxoesApi.removerProdutos(`613c`)
    })
})


export const criarCards = {
    card
}