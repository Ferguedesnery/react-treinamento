import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Rotas from './rotas';
import { HashRouter} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Rotas/>
      
    </HashRouter>
  );
}

export default App;
