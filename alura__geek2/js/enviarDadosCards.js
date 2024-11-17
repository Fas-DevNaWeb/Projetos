import { conecxoesApi } from "./conecxoesApi.js"

const formulario = document.querySelector("[dados-formulario]")

async function inserirDados(evento) {
    evento.preventDefault()

    const imagem = document.querySelector("[dados-imagem]").value
    const nome = document.querySelector("[dados-nome]").value
    const valor = document.querySelector("[dados-valor]").value

    try {
        if (imagem == "" || nome == "" || valor == "") {
            const fraseErro = document.querySelector('.mensagem-erro')
            fraseErro.innerHTML = 'Insira um valor valido para cadastro !!!'.toLocaleUpperCase()
        } else {
            await conecxoesApi.cadastrarProdutos(imagem, nome, valor);
            // window.location.href = "../pages/envio-concluido.html";
        }
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => inserirDados(evento))