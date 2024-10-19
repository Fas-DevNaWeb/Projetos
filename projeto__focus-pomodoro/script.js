const fundoHtml = document.querySelector('html')
const btnFoco = document.querySelector('.app__card-button--foco')
const btnDescansoCurto = document.querySelector('.app__card-button--curto')
const btnDescancoLongo = document.querySelector('.app__card-button--longo')


function setBotoes(contexto) {
    fundoHtml.setAttribute('data-contexto', `${contexto}`)
}

btnFoco.addEventListener('click', () => {
    setBotoes('foco')
})

btnDescansoCurto.addEventListener('click', () => {
    setBotoes('descanso-curto')

})

btnDescancoLongo.addEventListener('click', () => {
    setBotoes('descanso-longo')
})

