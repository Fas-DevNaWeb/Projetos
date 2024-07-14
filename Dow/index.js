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
const btnRecuperarDados = document.querySelector('.btn-recuperar');

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

const criarNotaFiscal = () => {

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

  if (qtdAbacaxi.innerText != 0)
    ordrInfo.quantidadeAbacaxi = parseInt(qtdAbacaxi.innerText);

  const molhos = document.querySelectorAll('input[name="molho"]:checked');
  if (molhos.length > 0) {
    ordrInfo.molhos = molhos.length;

    itensArray = [];
    itensArray = molhos.forEach((item) => {
      itensArray.push(item.id);
      ordrInfo.todosMolhos = itensArray;
    })

  }

  const somaQtdLanchao = ordrInfo.quantidadeLanchao * 20;
  const somaQtdLanche = ordrInfo.quantidadeLanche * 15;
  const somaQtdLanchinho = ordrInfo.quantidadeLanchinho * 10;
  const somaQtdOvoFrito = ordrInfo.quantidadeOvo * 1.5;
  const somaQtdabacaxi = ordrInfo.quantidadeAbacaxi * 1;
  const somaAcrescimoMolhos = ordrInfo.molhos * 2;

  const total = somaQtdLanchao + somaQtdLanche + somaQtdLanchinho + somaQtdOvoFrito + somaQtdabacaxi + somaAcrescimoMolhos;

  const batataFrita = document.querySelector('input[type="radio"]');
  let totalfinal = 0;
  if (batataFrita.checked) {
    totalfinal = total + 2;
    ordrInfo.batataFritissima = 2;
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

  if (qtdAbacaxi.innerText > 0) {
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
  ordrInfo.comentarioUsu = comentario;

  const totalf = document.createElement('li');
  totalf.className = 'estiloTotal';
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
    ordrInfo.Id = parseInt(p.innerText);
  }
  teste();

  const mostrarTela = document.querySelector('.ticket');
  mostrarTela.style.display = 'block';

  localStorage.setItem('nota', JSON.stringify(ordrInfo));
};

btnRecuperarDados.addEventListener('click', () => {

  const objRecuperadoString = localStorage.getItem('nota');
  const novoObjeto = JSON.parse(objRecuperadoString);

  inputName.value = novoObjeto.nome;
  inputEmail.value = novoObjeto.email;
  qtdLanchao.innerText = novoObjeto.quantidadeLanchao;
  qtdLanche.innerText = novoObjeto.quantidadeLanche;
  qtdLanchinho.innerText = novoObjeto.quantidadeLanchinho;

  qtdOvo.innerText = novoObjeto.quantidadeOvo;
  qtdAbacaxi.innerText = novoObjeto.quantidadeAbacaxi;

  const mMadeira = document.getElementById('molho-madeira');
  if( mMadeira.id ===  novoObjeto.todosMolhos[0] || mMadeira.id ===  novoObjeto.todosMolhos[2] || mMadeira.id ===  novoObjeto.todosMolhos[2] || mMadeira.id ===  novoObjeto.todosMolhos[3]){
    mMadeira.checked = true;
  }

  const mBarbecue = document.getElementById('molho-barbecue');
  if(mBarbecue.id === novoObjeto.todosMolhos[0] || mBarbecue.id === novoObjeto.todosMolhos[1] || mBarbecue.id === novoObjeto.todosMolhos[2] || mBarbecue.id === novoObjeto.todosMolhos[3]){
    mBarbecue.checked = true;
  }

  const mMolhoCasa = document.getElementById('molho-casa');
  if(mMolhoCasa.id === novoObjeto.todosMolhos[0] || mMolhoCasa.id === novoObjeto.todosMolhos[1] || mMolhoCasa.id === novoObjeto.todosMolhos[2] || mMolhoCasa.id === novoObjeto.todosMolhos[3]){
    mMolhoCasa.checked = true;
  }

  const mAlecrimDourado = document.getElementById('alecrim-dourado');
  if(mAlecrimDourado.id === novoObjeto.todosMolhos[0] || mAlecrimDourado.id === novoObjeto.todosMolhos[1] || mAlecrimDourado.id === novoObjeto.todosMolhos[2] || mAlecrimDourado.id === novoObjeto.todosMolhos[3]){
    mAlecrimDourado.checked = true;
  }

  if (novoObjeto.batataFritissima === 2) {
    const batataFrita = document.getElementById('sim');
    batataFrita.checked = true;
  }

  const comentariorecuperado = document.getElementById('coment');
  comentariorecuperado.value = novoObjeto.comentarioUsu;
});

forn.addEventListener("submit", (event) => {
  event.preventDefault();
  criarNotaFiscal();
});