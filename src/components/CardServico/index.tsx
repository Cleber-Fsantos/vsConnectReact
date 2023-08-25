import "./style.css"
import { Link } from "react-router-dom"

export default function CardServico(props: any) {
    function parseListaTechs(){
        if(typeof props.servTechs === "string"){
            return JSON.parse(props.servTechs)
        }
        else{
            return props.servTechs
        }
    }
    return (
        <div className="servico">
            <div className="topo_servico">
                {/* <h3>{ props.servTitulo }</h3> */}
                <Link to={ "/visualizar/servico/" + props.id } >{ props.servTitulo }</Link>
                <span>{ props.servValor }</span>
            </div>
            <p>
                {props.servDescricao}
            </p>
            <div className="techs">
                {
                    parseListaTechs().map((tech: string, index: number) => {
                        return <span key={ index }>{ tech }</span>
                    })
                }
            </div>
        </div>
    )
}