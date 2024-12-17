import { useState } from "react";
import Banner from "./Componentes/Banner";
import { Formulario } from "./Componentes/Formulario/Formulario";
import Time from "./Componentes/Time";


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Front End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7EB'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE9FS'
    },
    {
      nome: 'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Inavação e Gestão',
      corPrimaria:'#FFFA29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState("");

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
    console.log(colaborador);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado = {colaborador =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        />
       
       {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      </header>
    </div>
  );
}

export default App;
