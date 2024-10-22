
FORMAS DE SELECIONAR ELEMENTOS NO

1° - getElementById('id') Seleciona o elemento pelo IdleDeadline
2° - getElementsByClassName('nome da classe') Seleciona o elemento pela classe, não é necessario colocar o PushSubscriptionOptions
3° - getElementsByTagName('tag') Seleciona o elemento pelo nome da EventTarget, retorna também uma lista de tags caso temha mais de uma.
4° - querySelector('#(nome do id) ou da .(classe)') Seleciona o elemento por id ou classe tendo que referenciar na frente do nome com # ou ponto.Se for classe usa - se o ponto se for id usa - se a #
5° - querySelectorAll('tag') Seleciona todos elementos do mesmo tipo retornando uma nodeList um Array.

SOBRE O DEFER(adiar)
    < scrip scr = "sript.js " defer ></script > - Faz com que toda a página seja lida, e por ultimo lê o javaScript.


SOBRE EVENTOS
addEventListener(evento, callback)
elemento: É o elemento HTML ao qual queremos associar o evento.
    evento: É uma string que representa o tipo de evento que desejamos capturar.
        callback: É a função que será chamada quando o evento ocorrer.

            ex: Elemento html recuperado
const btnTeste = document.querySelector('.teste')
btnTeste.addEventListener('click', () => {
    console.log('Descreva seu codigo aqui dentro da função')
})
    Você pode utilizar outros tipos de eventos como:
'sibmit' - Para submeter formulários
'keydown' - Ocorre quando uma tecla é precionada.
        'keyup' - Ocorre quando uma tecla é solta.
        'keypress' - Ocorre quando uma telca é precionada e ainda não foi solta.

 TRABALHANDO COM ATRIBUTOS
getAttribute('nome do atributo que queremos recuperar') - É usado para obter o valor de um atributo especifico de um elemento.
    setAttribute('atributo a ser setado', 'novo valor') - Modifica o valor de um atributo do elemento html
    hasAttribute('nome do atributo') - É usado para cerificar se um elemento possui o atributo especificado retorna verdadeiro ou false
removeAttribute('nome do atributo') - É usado para remover um atributo de um elemento Html 


SOBRE O MÉTODO INNERHTML
    É utilizado para inserir textos ou adicionar elementos dentro de outra tag html. 

    Já o método textContent só aceita texto não tags html 

SOBRE O MÉTODO ClASSLIST
    classList é uma propriedade do JavaScript que representa uma lista de classes CSS.
    Ela fornece métodos que facilitam a adição, remoção e verificação de classes,
    tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

    São utilizados com ela os métodos - add(), remove(), toggle(), contains()




MANIPULANDO AUDIO
    Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe:
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');

    Controles básicos de áudio
play(): inicia a reprodução do áudio;
    pause(): pausa a reprodução do áudio;
    currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

audioElement.play(); // Inicia a reprodução
audioElement.pause(); // Pausa a reprodução
audioElement.currentTime = 10; // Move para 10 segundos no áudio
audioElement.volume = 0.5; // Define o volume para metade (50%)

    OBJETO DATE - VÁRIAS FORMAS DE CONSTRUÇÃO
    
    Construtor sem argumentos
const dataAtual = new Date();

    Construtor com argumentos(ano, mês, dia, hora, minuto, segundo, milissegundo)
const dataEspecifica = new Date(2023, 7, 3, 12, 30, 0, 0);

    Construtor com uma string que representa a data(formato padrão é "yyyy-mm-dd")
const dateString = "2023-08-03";
const formatoDeData = new Date(dateString);

    Uma vez criado um objeto Date, você pode acessar informações específicas da data 
    e hora, como o ano, mês, dia, hora, minuto e segundo usando os métodos de acesso
do objeto.
    Exemplo:
const currentDate = new Date();

const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds();  // Acessa os milissegundos 

    Você também pode modificar a data e hora usando os métodos de definição.

const data = new Date();

data.setFullYear(2024);  // Define o ano
data.setMonth(10); // Define o mês
data.setDate(25); // Define o dia
data.setHours(10);  // Define as horas
data.setMinutes(30); // Define os minutos
data.setSeconds(0); // Define os segundos

    Além disso, o objeto ‘Date’ também fornece vários métodos para trabalhar com
datas, como comparar datas, adicionar ou subtrair períodos de tempo, obter o 
    dia da semana, entre outros.
    Lembre - se de que, dependendo do fuso horário e configurações regionais do 
    sistema em que o código está sendo executado, os resultados podem variar. 
    Se você precisar de mais funcionalidades e suportes a diferentes formatos de 
    zonas de tempo, uma boa alternativa é o uso de bibliotecas de manipulação de
datas, como o Moment.js ou o date - fns.

    SOBRE PROMISE

    Resumo de como obter os valores do objeto de uma promessa.

// Aqui temos a requisição da promessa, com a função fetch()
const teste = fetch('http://viacep.com.br/ws/01001000/json/')

    // Aqui você pega o retorno da promessa e comverte em .json(),
    //não se esqueça de fazer o retorno dessa resposta.
    .then(response => {
        return response.json()
    })
    // Aqui você consegue acessar o objeto data retornado
    .then(data => {
        console.log(data.estado)
    })
