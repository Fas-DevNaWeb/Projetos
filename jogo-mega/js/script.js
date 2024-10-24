/*const teste = fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena')
.then((resposta) => {
    return resposta.json()
})
.then((megaData) => {
    console.log(megaData)
    const numerosSorteados = megaData.listaDezenas
    console.log(numerosSorteados)

})
*/

async function megaSena(){
    const teste = await fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena')
    const resposta = await teste.json()
    const numeros = resposta.listaDezenas;
    numeros.foreach(elem => {
        console.log(elem)

    })
}
megaSena()