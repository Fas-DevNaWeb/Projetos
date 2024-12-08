// evento.targuet.value capitura o que foi digitado no input.Seria o valor que o usuário esta digitando.
// onChange toda ves que o input for alterado ele vai executar aoDigitado a função
//import { useState } from 'react'
import './CampoTexto.css'

//let valor = 'HJGHHJGJ'



const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto