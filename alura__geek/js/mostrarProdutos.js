import { conectarApi } from "./conectarApi.js"

const containerGrupo = document.querySelector("[data-card]")

function constroiCard(imagem, nome, valor) {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
        <div class="imagem__produto">
        <img src="${imagem}" class="img-card">
        </div>
        <div class="card-container--info">
            <p class="nome">${nome}</p>
            <div class="card-container--value">
                <p>${valor}</p>
                <img src="img/🦆 icon _trash 2_.png" alt="Ícono da lixeira de delatar card">
            </div>
        </div>
    </div>
    `
    return card
}

async function listaCards() {
    const listaApi = await conectarApi.listaProdutos()
    listaApi.forEach(element => {
        containerGrupo.appendChild(constroiCard(element.imagem, element.nome, element.valor))
    })
}


listaCards()