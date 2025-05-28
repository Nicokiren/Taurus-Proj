import React, { useState, useEffect } from 'react';
import apiClient from '../api';

function ServicosList() {
  const [servicos, setServicos] = useState([]);
  const [manutencao, setManutencao] = useState(false);
  const [limpeza, setLimpeza] = useState(false);
  const [trocaDeOleo, setTrocaDeOleo] = useState(false);
  const [orcamento, setOrcamento] = useState(false);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    fetchServicos();
  }, []);

  const fetchServicos = async () => {
    try {
      const response = await apiClient.get('/Servicos');
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    }
  };

  const handleAddServico = async (event) => {
    event.preventDefault();
    const novoServico = {
      manutencao,
      limpeza,
      trocaDeOleo,
      orcamento,
      data: data || new Date().toISOString().split('T')[0],
      hora: hora || "00:00"
    };
    try {
      await apiClient.post('/Servicos', novoServico);
      fetchServicos();
      setManutencao(false);
      setLimpeza(false);
      setTrocaDeOleo(false);
      setOrcamento(false);
      setData('');
      setHora('');
    } catch (error) {
      console.error("Erro ao adicionar serviço:", error);
    }
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

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };


  return (
    <div>
      <div className="form-container">
        <h2>Adicionar Novo Pacote de Serviços Agendado</h2>
        <form onSubmit={handleAddServico}>
          <div>
            <label>
              <input
                type="checkbox"
                checked={manutencao}
                onChange={(e) => setManutencao(e.target.checked)}
              />
              Manutenção
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={limpeza}
                onChange={(e) => setLimpeza(e.target.checked)}
              />
              Limpeza
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={trocaDeOleo}
                onChange={(e) => setTrocaDeOleo(e.target.checked)}
              />
              Troca de Óleo
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={orcamento}
                onChange={(e) => setOrcamento(e.target.checked)}
              />
              Orçamento
            </label>
          </div>
          <div>
            <label>Data do Agendamento:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Hora do Agendamento:</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>
          <button type="submit">Adicionar Pacote de Serviços</button>
        </form>
      </div>

      <div className="list-container">
        <h2>Pacotes de Serviços Agendados</h2>
        {servicos.length === 0 ? (
          <p>Nenhum pacote de serviço agendado.</p>
        ) : (
          <ul>
            {servicos.map((servico) => (
              <li key={servico.id}>
                <strong>Pacote ID: {servico.id}</strong>
                Serviços:
                {(servico.manutencao || servico.limpeza || servico.trocaDeOleo || servico.orcamento) ? (
                    <ul>
                        {servico.manutencao && <li>Manutenção</li>}
                        {servico.limpeza && <li>Limpeza</li>}
                        {servico.trocaDeOleo && <li>Troca de Óleo</li>}
                        {servico.orcamento && <li>Orçamento</li>}
                    </ul>
                ) : "Nenhum serviço específico selecionado"}
                <br />
                Data: {formatDate(servico.data)} <br />
                Hora: {formatTime(servico.hora)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServicosList;