//props.children pega os elementos filhos nesse caso do borão
import './BotaoCriaCard.css'

const BotaoCriaCard = (props) => {
    return(
        <button className='botaoCard'>{props.children}</button>
    )
}

export default BotaoCriaCard