import "./CampoTexto.css"

const placeholderModificada = `${props.placeholder}`

export const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={}/>
        </div>
    )
}

