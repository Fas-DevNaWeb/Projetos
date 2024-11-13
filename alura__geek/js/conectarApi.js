async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criaVideo(imagem,nome,valor) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor:valor
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o card")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}



async function buscarProdutos(termoDeBusca) { 
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectarApi = {
    listaProdutos,
    buscarProdutos
}