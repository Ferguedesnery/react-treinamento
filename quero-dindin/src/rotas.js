import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Home from './views/home';
import EmprestimosCadastro from './views/emprestimos/cadastro'
import SolicitacaoOpcoes from './views/solicitacao/opcoes'
import AcompanhamentoEmprestimos from './views/emprestimos/acompanhamento'





export default () =>{
    return(
            <Switch> 
                <Route exact={true} path="/emprestimos-cadastro" component={EmprestimosCadastro}/>
                <Route exact={true} path="/emprestimos-acompanhamento" component={AcompanhamentoEmprestimos}/>
                <Route exact={true} path="/solicitacao-opcoes" component={SolicitacaoOpcoes}/> 
                <Route exact={true} path="/" component={Home}/>
            </Switch>
        
    )
}