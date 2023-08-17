//importar CSS
import "./style.css"
import CardServico from "../../components/CardServico"
import { useState } from "react";


export default function ListaServicos() {

  const [servicos, setServicos] = useState<any[]>([
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            valor: "R$ 1300,00",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            skills: ["Html", "Css", "React"]
        },
        {
            titulo: "Bot telegram Pagamento",
            valor: "R$ 2400,00",
            descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            skills: ["Python"]
        },
        {
            titulo: "Caixa Rápido",
            valor: "R$ 1200,00",
            descricao: "Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
            skills: ["Python"]
        }
    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servicos);

    function buscarPorSkill(event: any){
      event.preventDefault();

      const servicosFiltrados = servicos.filter((servico: any) => servico.skills.includes(skillDigitada.toLocaleUpperCase()));

      if(servicosFiltrados.length === 0){
          return alert("Nenhum serviço foi encontrado com essa Skill")
      }else{
          setListaServicosFiltrados(servicosFiltrados)
      }
    }

    function retornoServicosGeral(event: any){
      if(event.target.value === ""){
          setListaServicosFiltrados(servicos)
      }
      setSkillDigitada(event.target.value)
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
                  <input
                    type="search"
                    name="campo-busca"
                    id="busca"
                    placeholder="Buscar serviços por tecnologias..." 
                    onChange={retornoServicosGeral}
                  />
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
                {listaServicosFiltrados.map((servico: any, index: number) => {
                  return <li>
                      <CardServico
                        servTitulo={servico.titulo}
                        servValor={servico.valor}
                        servDescricao={servico.descricao}
                        servTechs={servico.skills}
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