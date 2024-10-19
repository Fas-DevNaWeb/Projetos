/*
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
        'keydown'- Ocorre quando uma tecla é precionada.
        'keyup'  - Ocorre quando uma tecla é solta.
        'keypress' - Ocorre quando uma telca é precionada e ainda não foi solta.

 TRABALHANDO COM ATRIBUTOS
    getAttribute('nome do atributo que queremos recuperar') - É usado para obter o valor de um atributo especifico de um elemento.       
    setAttribute('atributo a ser setado','novo valor') - Modifica o valor de um atributo do elemento html
    hasAttribute('nome do atributo') - É usado para cerificar se um elemento possui o atributo especificado retorna verdadeiro ou false
    removeAttribute('nome do atributo') - É usado para remover um atributo de um elemento Html 


    */