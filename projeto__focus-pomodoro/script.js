const fundoHtml = document.querySelector('html')
const btnFoco = document.querySelector('.app__card-button--foco')
const btnDescansoCurto = document.querySelector('.app__card-button--curto')
const btnDescancoLongo = document.querySelector('.app__card-button--longo')
const appImage = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button')
const musicaFoco = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')

console.log(musicaFoco)
musica.loop = true //Musica vai ficar tocando continuamente.

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    fundoHtml.setAttribute('data-contexto', `${contexto}`)
    appImage.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade,<br /><strong class="app__title-strong">mergulhe no que importa.</strong>'
            break
        case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada?<br /><strong class="app__title-strong">Faça uma pausa.</strong>'
            break
        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar á superfície.<br /><strong class="app__title-strong">Faça uma pausa longa.</strong>'
            break
    }
}


btnFoco.addEventListener('click', () => {
    alterarContexto('foco')
    btnFoco.classList.add('active')
})

btnDescansoCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    btnDescansoCurto.classList.add('active')
})

btnDescancoLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    btnDescancoLongo.classList.add('active')
})

musicaFoco.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})
