import React, { useState, useEffect } from 'react';
import apiClient from '../api';

function TicketsList() {
  const [tickets, setTickets] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [selectedPessoaId, setSelectedPessoaId] = useState('');
  const [selectedServicoId, setSelectedServicoId] = useState('');

  useEffect(() => {
    fetchTickets();
    fetchPessoas();
    fetchServicos();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await apiClient.get('/Tickets');
      setTickets(response.data);
    } catch (error) {
      console.error("Erro ao buscar tickets:", error);
    }
  };

  const fetchPessoas = async () => {
    try {
      const response = await apiClient.get('/Pessoas');
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };

  const fetchServicos = async () => {
    try {
      const response = await apiClient.get('/Servicos');
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar pacotes de serviços:", error);
    }
  };

  const handleAddTicket = async (event) => {
    event.preventDefault();
    if (!selectedPessoaId || !selectedServicoId) {
      alert("Por favor, selecione uma pessoa e um pacote de serviço.");
      return;
    }
    const novoTicketRequest = {
      pessoaId: parseInt(selectedPessoaId),
      servicosId: parseInt(selectedServicoId),
    };
    try {
      await apiClient.post('/Tickets', novoTicketRequest); //
      fetchTickets();
      setSelectedPessoaId('');
      setSelectedServicoId('');
    } catch (error) {
      console.error("Erro ao adicionar ticket:", error);
    }
  };

  const getServicoDetails = (servico) => {
    let details = [];
    if (servico.manutencao) details.push("Manutenção");
    if (servico.limpeza) details.push("Limpeza");
    if (servico.trocaDeOleo) details.push("Troca de Óleo");
    if (servico.orcamento) details.push("Orçamento");
    return details.length > 0 ? details.join(', ') : "Nenhum serviço específico";
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'N/A';
    if (timeString.includes('T')) {
        return new Date(timeString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }
     const parts = timeString.split(':');
    if (parts.length >= 2) {
        return `<span class="math-inline">\{parts\[0\]\}\:</span>{parts[1]}`;
    }
    return timeString;
  };


  return (
    <div>
      <div className="form-container">
        <h2>Criar Novo Ticket</h2>
        <form onSubmit={handleAddTicket}>
          <div>
            <label>Pessoa:</label>
            <select
              value={selectedPessoaId}
              onChange={(e) => setSelectedPessoaId(e.target.value)}
              required
            >
              <option value="">Selecione uma Pessoa</option>
              {pessoas.map((pessoa) => (
                <option key={pessoa.id} value={pessoa.id}>
                  {pessoa.nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pacote de Serviço Agendado:</label>
            <select
              value={selectedServicoId}
              onChange={(e) => setSelectedServicoId(e.target.value)}
              required
            >
              <option value="">Selecione um Pacote de Serviço</option>
              {servicos.map((servico) => (
                <option key={servico.id} value={servico.id}>
                  ID: {servico.id} ({getServicoDetails(servico)}) - Data: {formatDate(servico.data)} Hora: {formatTime(servico.hora)}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Criar Ticket</button>
        </form>
      </div>

      <div className="list-container">
        <h2>Tickets Criados</h2>
        {tickets.length === 0 ? (
          <p>Nenhum ticket criado.</p>
        ) : (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.ticketId}>
                <strong>Ticket ID: {ticket.ticketId}</strong>
                Cliente: {ticket.nomePessoa || 'Não informado'} <br />
                Serviços Escolhidos: {ticket.servicosEscolhidos ? ticket.servicosEscolhidos.join(', ') : 'N/A'} <br />
                Data Agendada: {ticket.data} <br />
                Hora Agendada: {ticket.hora}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TicketsList;