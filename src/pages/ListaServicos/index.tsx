//importar CSS
import "./style.css"
import CardServico from "../../components/CardServico"
import { useEffect, useState } from "react"

import api from "../../utils/api";

export default function ListaServicos() {
  const [servicos, setServicos] = useState<any[]>([]);


    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servicos);

    useEffect(()=>{
        document.title = "Lista de Servico's | VSConnect"

        listarServicos();
    }, [] )

    function buscarPorSkill(event: any){
        event.preventDefault();

        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(skillDigitada.toLocaleUpperCase()));

        if(servicosFiltrados.length === 0){
            return alert("Nenhum Serviço foi encontrado com essa Tecnologia")
        }else{
            setListaServicosFiltrados(servicosFiltrados)
        }
    }

    function retornoServicosGeral(event: any){
        if(event.target.value === ""){
            listarServicos()       
         }
        setSkillDigitada(event.target.value)
    }

    function listarServicos(){
        api.get("servicos").then((response: any) => {
            console.log(response.data)
            setServicos(response.data)
    })
    }
    return (
      <main id="lista-servicos">
             <div className="container container_lista_servicos">
               <div className="lista_servicos_conteudo">
                 <h1>Lista de Serviços</h1>
                 <hr />
                 <form method="post" onSubmit={buscarPorSkill}>
                   <div className="wrapper_form">
                     <label htmlFor="busca">Procurar serviços</label>
                     <div className="campo-label">
                       <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServicosGeral}/>
                       <button type="submit">Buscar</button>
                     </div>
                   </div>
                 </form>
                 <div className="wrapper_lista">
                   <ul>
                                {servicos.map((servico: any, index: number) => {
                                    return <li key={index}>
                                        <CardServico
                                            servTitulo={servico.nome}
                                            servValor={servico.valor}
                                            servDescricao={servico.descricao}
                                            servTechs={servico.techs}
                                        />
                                    </li>
                                }
                                )}
                            </ul>
             </div>
           </div>
         </div>
       </main>
   )

}