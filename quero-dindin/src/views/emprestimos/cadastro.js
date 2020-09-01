import React from 'react';
import SolicitacoesService from '../../app/solicitacoesService'
import {Link} from 'react-router-dom'



const estadoInicial = {
    nome: '',
    cpf:0,
    rg:0,
    endereco:'',
    cep:0,
    complemento:'',
    nomedamae:'',
    nomedopai:'',
    telefonefixo:0,
    celular:0,
    valor:0,
    parcela:"",
    pessoa:"",
    sucesso: false,
    errors: [],

}


class EmprestimosCadastro extends React.Component{

    state = estadoInicial;

    constructor(){
        super()
        this.service = new SolicitacoesService();
    }

    onChange = (event) => {
        const valor =  event.target.value
        const nomeDocampo  = event.target.name
        this.setState({ [nomeDocampo]: valor })
    }

    onSubmit = (event) =>{
       const solicitacao = {
        nome: this.state.nome,
        cpf: this.state.cpf,
        rg: this.state.rg,
        endereco: this.state.endereco,
        cep: this.state.cep,
        complemento: this.state.complemento,
        nomedamae:this.state.nomedamae,
        nomedopai: this.state.nomedopai,
        telefonefixo: this.state.telefonefixo,
        celular: this.state.celular,
        valor:this.state.valor,
        parcela: this.state.parcela,
        pessoa: this.state.pessoa,

       }
       try{
       this.service.salvar(solicitacao)
       this.limpaCampos()
       this.setState({sucesso: true})
       }catch(erro){
           const errors = erro.errors
           this.setState({errors : errors})
       }
    }

    limpaCampos = () =>{
        this.setState(estadoInicial)
    }


        render(){
            return(
                <div className="card" >
                    <div className="card-header" >
                    <div className="card bg-success text-white text-center">
                     <div className="card-body" >Cadastrar</div>
                    </div>
                    </div>

                        {this.state.sucesso ?(
                            <div class="alert alert-dismissible alert-success">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong> Muito bom!</strong> Cadastro realizado com sucesso! 
                            </div>
                        ) : (
                            <></>
                        )
                    }

                    {this.state.errors.length > 0 &&


                        this.state.errors.map (msg =>{
                            return(
                                <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                        

                    }






                    <div className= "card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Nome: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="nome" 
                                value={this.state.nome}
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>CPF: *</label>
                                <input type="text"
                                 onChange= {this.onChange}
                                 name="cpf" 
                                 value={this.state.cpf} 
                                 className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>RG: *</label>
                                <input type="text"
                                onChange= {this.onChange}
                                 name="rg" 
                                 value={this.state.rg} 
                                 className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Endereço: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="endereco"
                                value={this.state.endereco} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>CEP: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="cep"
                                 value={this.state.cep} 
                                 className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Complemento: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                 name="complemento" 
                                 value={this.state.complemento}
                                  className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Nome da Mãe: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                 name="nomedamae"
                                  value={this.state.nomedamae}
                                   className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Nome do Pai: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="nomedopai" 
                                value={this.state.nomedopai} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Telefone(fixo): *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="telefonefixo"
                                value={this.state.telefonefixo} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Celular: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="celular"
                                value={this.state.celular} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Valor: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="valor"
                                value={this.state.valor} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Número de parcelas: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="parcela"
                                value={this.state.parcela} 
                                className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Pessoa Física/Jurídica: *</label>
                                <input type="text" 
                                onChange= {this.onChange}
                                name="pessoa"
                                value={this.state.pessoa} 
                                className="form-control"/>
                            </div>
                        </div>

                   
                       
                   </div>
                  
                       <div className=" row h-100 justify-content-center align-items-center">
                       <img src="/img/tabela.JPG" class="img-fluid"  />
                       </div>
   
   

                    </div>

                    <div className="row">
                    <div className="col-md-12" align="center">
                                <button  onClick={this.onSubmit} className="btn btn-success mr-1" >Solicitar</button>

                                <button onClick={this.limpaCampos} className="btn btn-primary mr-1" >Limpar</button>

                                <Link to="/emprestimos-acompanhamento" className="btn btn-success"> Visualizar </Link>


                            </div>
                            </div>
                          
                </div>
            )
        }
}

export default EmprestimosCadastro;