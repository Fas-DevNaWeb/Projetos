import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [racas, setRacas] = useState([])
  const [busca, setBusca] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
      .then(resp => resp.json())
      .then(dados => {
        setRacas(dados)
      })
  }, [])

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch('http://localhost:8080/doguinhos?nome=' + busca)
        .then(resp => resp.json())
        .then(dados => {
          setRacas(dados)
        })
    }
  }, [busca])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindos aos Doguinhos</h1>
        <h4>Confira abaixo uma lista de raças dos Doguinhos</h4>
        <input placeholder='buscar por raça ...' onChange={evento => setBusca(evento.target.value)}></input>
        <ul>
          {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
