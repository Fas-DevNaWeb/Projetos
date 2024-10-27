// palindrome('rever');

/*
function palindrome(palavra) {
    const palavraRecebida = palavra;
    const palavraSeparada = palavraRecebida.split("");
    const palavraInvertida = palavraSeparada.reverse();
    const resultPalavraInvertida = palavraInvertida.join("");

    if (palavraRecebida == resultPalavraInvertida) {
        console.log('A palavra inserida é um polindrome!!!');
    } else {

        console.log('A palavra inserida não é um polindrome!!!');
    }
}
    */

const  palindrome = (palavra) => {
    const palavraRecebida = palavra;
    const palavraSeparada = palavraRecebida.split("");
    const palavraInvertida = palavraSeparada.reverse();
    const resultPalavraInvertida = palavraInvertida.join("");

    if (palavraRecebida == resultPalavraInvertida) {
        console.log('A palavra inserida é um polindrome!!!');
    } else {

        console.log('A palavra inserida não é um polindrome!!!');
    }
}
palindrome('rever');