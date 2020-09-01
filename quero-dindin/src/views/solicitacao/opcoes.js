import React from 'react';
import {Link} from 'react-router-dom'


class SolicitacaoOpcoes extends React.Component{




    render(){
        return(   
            <div className="row">
             <div className="col-md-20 m-5" align="center">
                <img src="/img/white.JPG" width="1000"   />
                 </div>
            <div className="col-md-6 ">
            <div className="container">  
            <div className="card text-white bg-primary mb-3" >
                <div className="card-body">
                 <h4 className="card-title">Solicitações de Empréstimo</h4>
                 <p className="card-text">Não perca tempo, quanto antes você solicitar menores vão ser os juros!</p>
                 <Link to="/emprestimos-cadastro" className="btn btn-success"> Cadastrar </Link>
                </div>
                </div>
           </div>    
            </div>        
           <div className="col-md-6 ">
           <div className="container">
            <div className="card text-white bg-success mb-3" >
             <div className="card-body">
             <h4 className="card-title">Acompanhamento de Empréstimos</h4>
                <p className="card-text">Fique ligado que logo o dindin vai cair!</p>
                <Link to="/emprestimos-acompanhamento" className="btn btn-primary"> Acompanhar </Link>
             </div>
            </div>
          </div>

          <div className=" row h-100 justify-content-center align-items-center">
                       <img src="/img/dindin.JPG" class="img-fluid"  />
                       </div>
          </div> 
          </div>  
         

           
        )
    }
}


export default SolicitacaoOpcoes;
