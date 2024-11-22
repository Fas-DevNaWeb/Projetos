async function listadeProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}



async function removerProdutos(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}


async function cadastrarProdutos(imagem, nome, valor) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST", //Como você está enviando uma solicitação POST, é preciso declarar que está usando o método POST.
        headers: { "Content-type": "application/json" }, // Como você está enviando dados em JSON, precisa definir um cabeçalho com o Content-Type definido como application/json.
        body: JSON.stringify({ //Por fim, você precisa do corpo (body), que será uma única string de dados em JSON.
            imagem: imagem,
            nome: nome,
            valor: valor
        })
    })
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o card")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conecxoesApi = {
    listadeProdutos,
    cadastrarProdutos,
    removerProdutos
}