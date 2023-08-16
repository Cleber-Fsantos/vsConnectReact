import "./style.css"

export default function CardServico(props: any) {

    return (
        <div className="servico">
            <div className="topo_servico">
                <h3>{ props.servTitulo }</h3>
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