import CampoTexto from "../CampoTexto"
import "./Formulario.css"
import ListaSuspensa from "../ListaSuspenca/ListaSuspensa"
import Botao from "../Botao/Botao"



export const Formulario = () => {

    const times =['Programação','Front End','Data Science','Devops','UX e Design','Mobile','Inavação e Gestão']

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('1form foi clicado!')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite se nome ..." />
            <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto  label="Imagem" placeholder="Insira sua imagem" />
            <ListaSuspensa obrigatorio="true" label="Time" itens={times}/>
            <Botao>Cadastrar</Botao>
            </form>
        </section>

    )
}