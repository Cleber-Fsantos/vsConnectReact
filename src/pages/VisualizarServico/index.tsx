//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

//Api
import api from "../../utils/api";

function VisualizarServico() {
     //Utilizando Params para pegar o ID no URL/Routes
     const { idServico } = useParams(); 
    //Variavel em React => UseStates
     const [nome, setNome] = useState<string>("");
     const [valor, setValor] = useState<string>("");
     const [descricao, setDescricao] = useState<string>("");
     const [techs, setTechs] = useState<string[]>([]);

    function buscarServicoPorId(){
        api.get("servicos/" +idServico).then((response:any) => {
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setTechs(response.data.techs)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(()=>{
        document.title = "Serviço - VSConnect";

        buscarServicoPorId();
    },[])


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviços </h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{ nome }</h2>
                        <span>{ valor }</span>
                    </div>
                    <p>{ descricao }</p>
                    <div className="techs">
                    {
                                techs.map( (tech: any, index: number) => {
                                    return <span key={ index }>{ tech }</span>
                                })
                            }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;