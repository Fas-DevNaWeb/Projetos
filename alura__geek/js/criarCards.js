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
                             <p class="card__preco">R$ ${valor}</p>
                            <button class="deletar-card"></button>
                         </div>`
    return objCard
}


produtos.forEach(element => {
    const teste1 = element.valor
    const t =  teste1.toLocaleString("pt-BR",{ style: "currency" , currency:"BRL"})
    console.log(t)
    containerDosCards.appendChild(card(element.imagem, element.nome,t))
})

const teste = document.querySelectorAll('.deletar-card')

const cardEmquestao = conecxoesApi.listadeProdutos()


teste.forEach((element, indice) => {
    element.addEventListener('click', () => {
        const teste = cardEmquestao.then(r => {
            conecxoesApi.removerProdutos(r[indice].id)
        })
    })
})

var valor = 1400;
var texto = valor.toLocaleString("pt-BR",
    { style: "currency", currency: "BRL" });

console.log(texto);

export const criarCards = {
    card
}