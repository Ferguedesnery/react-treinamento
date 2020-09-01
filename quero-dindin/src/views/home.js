import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        
            <div className="card" > 
                <div className= "card-body"> 
                     <div className="row">
                     <div className="col-md-5 m-5">
                            <div className="from-group">
                                <label>E-mail: </label>
                                <input type="text" 
                                className="form-control"/>
                            </div>
                            <div className="from-group">
                                <label>Senha: </label>
                                <input type="text" 
                                className="form-control"/>
                            </div>
                            <div className="col-md-10 m-5 " align="center">
                                <Link to="/solicitacao-opcoes" className="btn btn-success"> Entre Agora </Link>
                        </div>
                        </div>
                        <div className="row">
                       
                    <div className="col-md-20 m-5" align="center">
                    <img src="/img/chuva.JPG" width="500" height="500"  />


                            </div>
                            </div>

                    </div>
            
                </div>
            </div>
       
            
    )
}

export default Home;