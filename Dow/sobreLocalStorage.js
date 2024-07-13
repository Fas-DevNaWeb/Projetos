localStorage é um objeto que serve para armazenar dados no seu computador.
Sempre que você quizer criar um par de chave valor no localStorage você utiliza o método setItem('chave','valor');
Sempre que você quizer recuperar algo do localStorage você utiliza o método getItem('chave');

Outras OBS: -> getItem('chave'), retorna uma String.

Sempre que você quizer transformar uma string em um objeto você utiliza um recurso chamado JSON.
JSON transforma uma String em um objeto ou Array, usando o método parse();.
Exemplo -> JSON.parse('fas');

JSON possui outros métodos por exemplo o método stringify([1,2,3,4]); que transforma um array em uma string.