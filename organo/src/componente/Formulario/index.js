import { useState } from "react"
import BotaoCriaCard from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './formulario.css'

const times = ['Programação', 'Front End', 'DataScience', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

const [nome, setNome] = useState('')
//const [cargo,setCargo] = useState('')
//const [imagem,setImagem] = useState('')


const aoSalvar = (evento) => {
    // Previne o comportamento padrão de recarregar a página nesse caso   
    evento.preventDefault()
    console.log('Form foi clicado')
}

const Formulario = () => {
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha para criar o card do Colaborador</h2>
                <CampoTexto value={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto value={cargo} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto value={imagem} label="Imagem" placeholder="Entre com uma Imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <BotaoCriaCard>
                    Criar Card
                </BotaoCriaCard>
            </form>
        </section>
    )
}

export default Formulario