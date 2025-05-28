import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PessoasList from './components/PessoasList';
import ServicosList from './components/ServicosList';
import TicketsList from './components/TicketsList';

function HomePage() {
  return (
    <div className="page-content">
      <h2>Bem-vindo(a) à Web Oficina Taurus!</h2>
      <p>Use o menu acima para navegar.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Oficina Taurus</h1>
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/pessoas">Pessoas</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/tickets">Tickets</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pessoas" element={<PessoasList />} />
            <Route path="/servicos" element={<ServicosList />} />
            <Route path="/tickets" element={<TicketsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;