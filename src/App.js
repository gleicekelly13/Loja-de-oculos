import React from 'react';
import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo/conteudo';
import Rodape from './componentes/Rodape';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default App;
