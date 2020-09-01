import React from 'react'
import SolicitacoesService from '../../app/solicitacoesService'
import {Link} from 'react-router-dom'


export class AcompanhamentoEmprestimos extends React.Component{

    state = {
        solicitacoes : []
    }

    constructor(){
        super()
        this.service = new SolicitacoesService();
    }

    componentDidMount(){
        const solicitacoes = this.service.obterSolicitacoes();
        this.setState({solicitacoes : solicitacoes})
    }

    deletar = (valor) => {
       const solicitacoes = this.service.deletar(valor)
       this.setState({solicitacoes})

    }

    render(){
        return(
            <div className = "card">
                <div className = "card-header">
                <div className="card bg-success text-white text-center">
                     <div className="card-body" > Solicitações em Andamento </div>
                    </div>
            

            </div>
            <div className = "card-body">
            <table className ="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Valor</th>
                        <th>Númerpo parcelas</th>
                        <th></th>

                        
                             
                        
                    </tr>
                </thead>
                    <tbody>
                        { this.state.solicitacoes.map( (solicitacao, index ) => {
                            return(
                                <tr key={index}>
                                <th>{solicitacao.nome}</th>
                                <th>{solicitacao.cpf}</th>
                                <th>{solicitacao.valor}</th>
                                <th>{solicitacao.parcela}</th>
                                <th>
                                    <button onClick={() => this.deletar(solicitacao.valor)} className="btn btn-danger "> Remorver </button>
                                </th>
                            </tr>
                                )
                            }) 
                        }
                    </tbody>




                </table>
                <div class="col-md-12 text-center">
                <Link to="/emprestimos-cadastro" className="btn btn-success "> Novo cadastro </Link>
                </div>

                </div>

                </div>
        )
    }
}

export default AcompanhamentoEmprestimos;