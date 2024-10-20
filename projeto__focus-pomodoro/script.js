const fundoHtml = document.querySelector('html')
const btnFoco = document.querySelector('.app__card-button--foco')
const btnDescansoCurto = document.querySelector('.app__card-button--curto')
const btnDescancoLongo = document.querySelector('.app__card-button--longo')
const appImage = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button')
const musicaFoco = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')
const btnComecarPause = document.querySelector('#start-pause')
const fraseDoBotao = document.querySelector('#start-pause span')
const somDePlay = new Audio('./sons/play.wav')
const somDePause = new Audio('./sons/pause.mp3')
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const imgIconPlay = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')


let intervaloId = null
let tempoDecorridoEmSegundos = 1500

musica.loop = true //Musica vai ficar tocando continuamente.

function alterarContexto(contexto) {
    mostrarTempo()
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
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    btnFoco.classList.add('active')
})

btnDescansoCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    btnDescansoCurto.classList.add('active')
})

btnDescancoLongo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
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

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        // audioTempoFinalizado.play()
        alert('Tempo finalisado.')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

btnComecarPause.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (btnComecarPause.innerText == 'Começar') {
        somDePlay.play()
        imgIconPlay.setAttribute('src', 'imagens/pause.png')
        fraseDoBotao.textContent = 'Pause'
    } else if (btnComecarPause.innerText == 'Pause') {
        somDePause.play()
        imgIconPlay.setAttribute('src', 'imagens/play_arrow.png')
        fraseDoBotao.textContent = 'Começar'
    }

    if (intervaloId) {
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' })
    tempoNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()