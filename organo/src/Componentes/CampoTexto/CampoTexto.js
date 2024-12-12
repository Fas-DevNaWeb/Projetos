import "./CampoTexto.css"

export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    let valor = ''

    const aoDigitado = (event) => {
        valor = event.target.value
      
        console.log(valor)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

