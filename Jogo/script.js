let inputNumber = document.querySelector("input");
let btnChutar = document.querySelector("#botao");
let mensagem = document.querySelector(".msg");
let acertouErrou = document.querySelector(".acertou-errou");

let numAleatorio = Math.floor(Math.random() * 11);

console.log(numAleatorio);
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela("h1", "Jogo do Número Secreto!");
exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");

function exibirConfet(){
  let params = {
		particleCount: 500, // Quantidade de confetes
		spread: 90, // O quanto eles se espalham
		startVelocity: 70, // Velocidade inicial
		origin: { x: 0, y: 0.5 }, // Posição inicial na tela
		angle: 45 // Ângulo em que os confetes serão lançados
	};

	// Joga confetes da esquerda pra direita
	confetti(params);

	// Joga confetes da direita para a esquerda
	params.origin.x = 1;
	params.angle = 135;
	confetti(params);

}

let contador = 1;

btnChutar.addEventListener("click", () => {
  if (
    inputNumber.value > 10 ||
    inputNumber.value < 1 ||
    inputNumber.value === ""
  ) {
    mensagem.innerText = "Você tem que inserir um número entre 1 até 10.";
    inputNumber.value = "";
  } else {
    if (inputNumber.value > numAleatorio) {
      //const img = document.createElement("img");
      //img.classList.add("estilo-acertou-errou");
      //img.src = "./img/errou4.gif";
      //acertouErrou.appendChild(img);
      mensagem.innerText = "O número secreto é Menor,tente novamente!";
      inputNumber.value = '';
      contador++;
    } 
    else if (inputNumber.value < numAleatorio) {
      //const img = document.createElement("img");
      //img.classList.add("estilo-acertou-errou");
      //img.src = "./img/errou4.gif";
      //acertouErrou.appendChild(img);
      mensagem.innerText = "O número secreto é Maior,tente novamente!";
      inputNumber.value = '';
      contador++;
    } 
    else if(parseInt(inputNumber.value) === numAleatorio) {
      //const img = document.createElement("img");
      //img.classList.add("estilo-acertou-errou");
      //img.src = "./img/t.webp";
      //acertouErrou.appendChild(img);
      mensagem.innerText = `Acertou !!! - Com ${contador} Tentativas`;
      inputNumber.value = '';
      exibirConfet();
    }
  }
  responsiveVoice.speak(mensagem.innerText, 'Brazilian Portuguese Female', {rate:1.2});
});

inputNumber.addEventListener("click", () => {
  const imagemRecuperada = document.querySelector(".estilo-acertou-errou");

  if(imagemRecuperada){
    imagemRecuperada.remove();
  }
  mensagem.innerText = "";
});