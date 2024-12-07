// evento.targuet.value capitura o que foi digitado no input.
import './CampoTexto.css'

let valor = 'HJGHHJGJ'

const aoDigitado = (evento) => {
    valor = evento.target.value
    console.log(valor)
}

const CampoTexto = (props) => {
     return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto