import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  // Hooks é um gancho
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  // evento.preventDefalt() previne o comportamento padrao do botao.
  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(nome) => setNome(nome)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          label="Cargo"
          valor={cargo}
          obrigatorio="true"
          placeholder="Digite seu cargo"
          aoAlterado={(nome) => setCargo(nome)}
        />
        <CampoTexto
          valor={imagem}
          label="Imagem"
          placeholder="Insira sua imagem"
          aoAlterado={(nome) => setImagem(nome)}
        />
        <ListaSuspensa
          obrigatorio="true"
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
