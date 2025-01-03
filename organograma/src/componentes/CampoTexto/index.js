import "./CampoTexto.css";

function CampoTexto(props) {
    const placeholderModificada = `${props.placeholder} ...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);   
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
        value={props.valor}
      />
    </div>
  );
}

export default CampoTexto;
