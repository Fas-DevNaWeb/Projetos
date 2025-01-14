import { useState } from 'react';
import './App.css';

function App() {
  const [endereco,setEndereco] = useState({});

  function manipularEndereco(e){
    setEndereco({cep:e.target.value});
  }

  if(endereco.cep && endereco.cep.length === 8){
    fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`)
    .then(response => response.json())
    .then(data => setEndereco({
      cep:data.cep,
      rua:data.logradouro,
      bairro:data.bairro,
      cidade:data.localidade,
      estado:data.uf
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Digite o cep ..' onChange={manipularEndereco}/>
        <ul>
            <li>CEP: {endereco.cep}</li>
            <li>BAIRRO: {endereco.bairro}</li>
            <li>CIDADE: {endereco.cidade}</li>
            <li>ESTADO: {endereco.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
