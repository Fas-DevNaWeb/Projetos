import { conecxoesApi } from "./conecxoesApi.js"

const formulario = document.querySelector("[dados-formulario]")
const fraseErro = document.querySelector('.mensagem-erro')
const btnLimpar = document.querySelector("[botao-limpar]")

async function inserirDados(evento) {
    evento.preventDefault()

    const imagem = document.querySelector("[dados-imagem]")
    const nome = document.querySelector("[dados-nome]")
    const valor = document.querySelector("[dados-valor]")

    
    try {

        imagem.addEventListener('click',() => {
            fraseErro.innerHTML = ""
        })
        nome.addEventListener('click', () => {
            fraseErro.innerHTML = ""
        })

        valor.addEventListener('click', () => {
            fraseErro.innerHTML = ""
        })
        if (imagem.value == "" || nome.value == "" || valor.value == "") {
            
            fraseErro.innerHTML = 'Insira um valor valido para cadastro !!!'.toLocaleUpperCase()
        } else {

            await conecxoesApi.cadastrarProdutos(imagem.value, nome.value, valor.value)
            // window.location.href = "../pages/envio-concluido.html";
        }
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => inserirDados(evento))

btnLimpar.addEventListener('click', (e) => {
    document.querySelector("[dados-nome]").value = ""
    document.querySelector("[dados-valor]").value = ""
    document.querySelector("[dados-imagem]").value = ""
    e.preventDefault()
})
