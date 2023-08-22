import "./style.css"
import { Link } from "react-router-dom"

export default function CardServico(props: any) {

    return (
        <div className="servico">
            <div className="topo_servico">
                {/* <h3>{ props.servTitulo }</h3> */}
                <Link to={ "/visualizar/servico/" + props.id } > { props.servTitulo}</Link>
                <span>{ props.servValor }</span>
            </div>
            <p>
                {props.servDescricao}
            </p>
            <div className="techs">
                {
                    props.servTechs.map((tech: string, index: number) => {
                        return <span key={ index }>{ tech }</span>
                    })
                }
            </div>
        </div>
    )
}