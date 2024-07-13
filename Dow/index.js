/**
 * addEventListener(), é um método que adiciona um evento um escutador ao seu elemento
 * Isso indica que naquele ponto vai acontecer alguma ação,seja um click de um botão ou o mause
 * que passou por uma imagem e assim vai dependendo de qual ação você que usar.
 */

/*
No addEventListener(event,função), ele recebe dois parametros um e o tipo de evento,nesse caso
quando ouver um submit no botão, o outro parametro é uma função que designa o que tem que ser feito 
quando esse botão for acionado.

OBS 1:Lembrese que quando o navegador executa o evento ele da um refresh na pagina e isso é muito rapido. 
você não conseguirar ver o resultado, por isso você precisa passar um parametro na sua função o
(event) é um evento que por sua vez possui um metodo chamado preventDefault(); que vai guardar essa 
informação, de modo que você vai conseguir ver os resultados no browser.
*/

/*
OBS 2: Você pode capturar elementos html de váriaas formas, por tag, por classe,por id ou por uma determinada 
propriedade.
A ideia é que quando você capitura esses elementos  eles ficam a sua disposição para ser manipulados.
Ex: Você pode capiturar o valor contido num campo de texto por exemplo. 
*/

/**
OBS: 3 Quando você cria um botão que esta sobre o evento de outro botão nesse caso no mesmo
escopo, ele executa do mesmo geito se você não identifica-lo como um botão comum, se você não qué que ele
aja como um executador você deve coloca-lo como type="button". Ou fazer uma expecificação no botão desejado.
 */

const inputName = document.getElementById("name");
const inputEmail = document.querySelector("#email");
const forn = document.querySelector("form");

const btnMenosLanchao = document.querySelector(".btn-menos-lanchao");
const qtdLanchao = document.querySelector("#qtd-lanchao");
const btnMaisLanchao = document.querySelector(".btn-mais-lanchao");

const btnMenosLanche = document.querySelector(".btn-menos-lanche");
const qtdLanche = document.querySelector("#qtd-lanche");
const btnMaisLanche = document.querySelector(".btn-mais-lanche");

const btnMenosLanchinho = document.querySelector(".btn-menos-lanchinho");
const qtdLanchinho = document.querySelector("#qtd-lanchinho");
const btnMaisLanchinho = document.querySelector(".btn-mais-lanchinho");

const btnMenosOvo = document.querySelector(".btn-menos-ovo");
const qtdOvo = document.querySelector("#qtd-ovo");
const btnMaisOvo = document.querySelector(".btn-mais-ovo");

const btnMenosAbacaxi = document.querySelector(".btn-menos-abacaxi");
const qtdAbacaxi = document.querySelector("#qtd-abacaxi");
const btnMaisAbacaxi = document.querySelector(".btn-mais-abacaxi");


const quantidade = (menos, quantidade, mais) => {
  menos.addEventListener("click", () => {
    if (parseInt(quantidade.innerText) > 0) {
      quantidade.innerText = parseInt(quantidade.innerText) - 1;
    }
  });

  mais.addEventListener("click", () => {
    quantidade.innerText = parseInt(quantidade.innerText) + 1;
  });
};
quantidade(btnMenosLanchao, qtdLanchao, btnMaisLanchao);
quantidade(btnMenosLanche, qtdLanche, btnMaisLanche);
quantidade(btnMenosLanchinho, qtdLanchinho, btnMaisLanchinho);
quantidade(btnMenosOvo, qtdOvo, btnMaisOvo);
quantidade(btnMenosAbacaxi, qtdAbacaxi, btnMaisAbacaxi);


forn.addEventListener("submit", (event) => {
  event.preventDefault();

  let ordrInfo = {};
  ordrInfo.nome = inputName.value;
  ordrInfo.email = inputEmail.value;

  if (qtdLanchao.innerText != 0)
    ordrInfo.quantidadeLanchao = parseInt(qtdLanchao.innerText);
  if (qtdLanche.innerText != 0)
    ordrInfo.quantidadeLanche = parseInt(qtdLanche.innerText);
  if (qtdLanchinho.innerText != 0)
    ordrInfo.quantidadeLanchinho = parseInt(qtdLanchinho.innerText);

  if (qtdOvo.innerText != 0)
    ordrInfo.quantidadeOvo = parseInt(qtdOvo.innerText);
  if (qtdOvo.innerText != 0)
    ordrInfo.quantidadeAbacaxi = parseInt(qtdAbacaxi.innerText);

  const molhos = document.querySelectorAll('input[name="molho"]:checked');
  if (molhos.length > 0) ordrInfo.molhos = molhos.length;




  const somaQtdLanchao = ordrInfo.quantidadeLanchao * 20;
  const somaQtdLanche = ordrInfo.quantidadeLanche * 15;
  const somaQtdLanchinho = ordrInfo.quantidadeLanchinho * 10;
  const somaQtdOvoFrito = ordrInfo.quantidadeOvo * 1.5;
  const somaQtdabacaxi = ordrInfo.quantidadeAbacaxi * 1;
  const somaAcrescimoMolhos = ordrInfo.molhos * 2;

  const total = somaQtdLanchao + somaQtdLanche + somaQtdLanchinho + somaQtdOvoFrito + somaQtdabacaxi + somaAcrescimoMolhos;

  const batataFrita = document.querySelector('input[type="radio"]');
  console.log(total);
  let totalfinal = 0;
  if (batataFrita.checked) {
    totalfinal = total + 2;
    console.log(totalfinal);
  }


  const insertLi = document.getElementById('orderList');
  const nomeUsuario = document.createElement('li');
  nomeUsuario.innerText = `Nome: ${ordrInfo.nome}`;
  insertLi.appendChild(nomeUsuario);

  const emailUsuario = document.createElement('li');
  emailUsuario.innerText = `Email: ${ordrInfo.email}`;
  insertLi.appendChild(emailUsuario);

  if (qtdLanchao.innerText > 0) {
    const Lanchao = document.createElement('li');
    Lanchao.innerText = `Lanchão: R$ ${somaQtdLanchao.toFixed(2)}`;
    insertLi.appendChild(Lanchao);
  }

  if (qtdLanche.innerText > 0) {
    const Lanche = document.createElement('li');
    Lanche.innerText = `Lanche: R$ ${somaQtdLanche.toFixed(2)}`;
    insertLi.appendChild(Lanche);
  }

  if (qtdLanchinho.innerText > 0) {
    const Lanchinho = document.createElement('li');
    Lanchinho.innerText = `Lanchinho: R$ ${somaQtdLanchinho.toFixed(2)}`;
    insertLi.appendChild(Lanchinho);
  }

  if (qtdOvo.innerText > 0) {
    const ovoFrito = document.createElement('li');
    ovoFrito.innerText = `Ovos: R$ ${somaQtdOvoFrito.toFixed(2)}`;
    insertLi.appendChild(ovoFrito);
  }

  if (qtdAbacaxi > 0) {
    const abacaxi = document.createElement('li');
    abacaxi.innerText = `Abacaxi: R$ ${somaQtdabacaxi.toFixed(2)}`;
    insertLi.appendChild(abacaxi);
  }

  if (ordrInfo.molhos > 0) {
    const maisMolhos = document.createElement('li');
    maisMolhos.innerText = `Molhos: R$ ${somaAcrescimoMolhos.toFixed(2)}`;
    insertLi.appendChild(maisMolhos);
  }

  if (batataFrita.checked) {
    const batata = document.createElement('li');
    batata.innerText = `Batata Frita: R$ 2,00`;
    insertLi.appendChild(batata);
  }


  const comentario = document.getElementById('coment').value;
  const comentarioUsuario = document.createElement('li');
  comentarioUsuario.innerText = `Algum Comentário: ${comentario}`;
  insertLi.appendChild(comentarioUsuario);

  const totalf = document.createElement('li');
  totalf.innerText = `Total : R$ ${totalfinal.toFixed(2)}`;
  insertLi.appendChild(totalf);

  const gerarNumeroPedido = () => {
    const numPedido = Math.floor(Math.random() * 101);
    return numPedido;
  }

  const teste = () => {
    const pedido = document.getElementById('ticket-number');
    const p = document.createElement('p');
    p.innerText = gerarNumeroPedido();
    pedido.appendChild(p);
  }

  teste();

  const mostrarTela = document.querySelector('.ticket');
  mostrarTela.style.display = 'block';

});

