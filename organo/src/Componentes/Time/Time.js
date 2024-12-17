import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const css2 = { borderColor: props.corPrimaria };
  return (
    <section className="time" style={css}>
      <h3 style={css2}>{props.nome}</h3>
      <Colaborador />
    </section>
  );
};
