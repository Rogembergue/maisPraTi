import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import q01 from './components/q01';
import q02 from './components/q02';
import q03 from './components/q03';

function App() {
  return (
    <Router>
      <div>
        <h1>Menu de Atividades</h1>
        
        <nav>
          <ul>
            <li>
              <Link to="/q01">Contador Simples</Link>
            </li>
            <li>
              <Link to="/q02">Alteracao de Cor de Fundo</Link>
            </li>
            <li>
              <Link to="/q03">Lista de Tarefas</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/q01" component={q01} />
          <Route path="/q02" component={q02} />
          <Route path="/q03" component={q03} />
          <Route path="/" exact>
            <h2>Bem-vindo! Selecione uma atividade acima.</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
