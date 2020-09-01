import React from 'react';
import {Link} from 'react-router-dom'


function Navbar(){
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <img src="/img/logoazul.JPG" width="125" height="70" />
                </a>
                <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/solicitacao-opcoes">Serviços</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Quem Somos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Funcionamento</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Dúvidas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Contato</Link>
                    </li>
                </ul>
            </div>
            </nav>
                  
    )
}

export default Navbar;