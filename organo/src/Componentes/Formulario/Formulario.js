import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspenca/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

export const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
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
          obrigatorio="true"
          label="Nome"
          placeholder="Digite se nome ..."
          valor={nome}
          aoAlterado={(valor) => {
            setNome(valor);
          }}
        />
        <CampoTexto
          obrigatorio="true"
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => {
            setCargo(valor);
          }}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Insira sua imagem"
          valor={imagem}
          aoAlterado={(valor) => {
            setImagem(valor);
          }}
        />
        <ListaSuspensa
          obrigatorio="true"
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => {
            setTime(valor);
          }}
        />
        <Botao>Cadastrar</Botao>
      </form>
    </section>
  );
};
