import { conectarApi } from "./conectarApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conectarApi.criarProduto(imagem,nome,valor);

}

formulario.addEventListener("submit", evento => criarProduto(evento))