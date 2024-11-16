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
                             <img src="img/🦆 icon _trash 2_.png" alt="imagem do icone lixeira deletar card">
                         </div>`
    return objCard
}

produtos.forEach(element => {
    containerDosCards.appendChild(card(element.imagem, element.nome, element.valor))
});



