//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inpNomeAmigo = document.getElementById('amigo')
const btnCadastrar = document.querySelector('.button-add')
const elemUl = document.getElementById('listaAmigos')
const elemUl2 = document.getElementById('resultado')
const btnSortearAmigo = document.querySelector('.button-draw')

const listaNomesGuardados = []

function inserirNomeNaTela() {
    if (elemUl.style.display === 'none') {
        elemUl.style.display = 'block'
    }

    const li = document.createElement('li')
    listaNomesGuardados.map(elem => {
        li.innerHTML = elem
        elemUl.appendChild(li)
    })
}

function cadastrarNomesDeAmigos() {
    if (inpNomeAmigo.value === '') {
        alert('Insira um nome correto no campo de texto :)')
    } else {
        listaNomesGuardados.push(inpNomeAmigo.value)
        inpNomeAmigo.value = ''
        inpNomeAmigo.focus()

        inserirNomeNaTela()
    }
}

btnCadastrar.addEventListener('click', () => {
    cadastrarNomesDeAmigos()
})

function sortearAmmigo() {
    const numeroSorteado = Math.floor(Math.random() * listaNomesGuardados.length)  
    if(numeroSorteado === 0){
        return 'Insira um nome correto no campo de texto :)'
        
    }else{
     return listaNomesGuardados[numeroSorteado] 
    }   
}

btnSortearAmigo.addEventListener('click', () => {
    const liNomeSorteado = document.createElement('li')
    liNomeSorteado.innerHTML = sortearAmmigo()
    elemUl.style.display = "none"
   
    console.log(liNomeSorteado)
    elemUl2.appendChild(liNomeSorteado)   
})

