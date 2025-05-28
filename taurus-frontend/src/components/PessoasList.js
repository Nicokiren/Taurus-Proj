import React, { useState, useEffect } from 'react';
import apiClient from '../api';

function PessoasList() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    try {
      const response = await apiClient.get('/Pessoas');
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };

  const handleAddPessoa = async (event) => {
    event.preventDefault();
    const novaPessoa = { nome, telefone, endereco };
    try {
      await apiClient.post('/Pessoas', novaPessoa);
      fetchPessoas();
      setNome('');
      setTelefone('');
      setEndereco('');
    } catch (error) {
      console.error("Erro ao adicionar pessoa:", error);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Adicionar Nova Pessoa</h2>
        <form onSubmit={handleAddPessoa}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div>
            <label>Endereço:</label>
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <button type="submit">Adicionar Pessoa</button>
        </form>
      </div>

      <div className="list-container">
        <h2>Lista de Pessoas</h2>
        {pessoas.length === 0 ? (
          <p>Nenhuma pessoa cadastrada.</p>
        ) : (
          <ul>
            {pessoas.map((pessoa) => (
              <li key={pessoa.id}>
                <strong>{pessoa.nome}</strong>
                Telefone: {pessoa.telefone || 'Não informado'} <br />
                Endereço: {pessoa.endereco || 'Não informado'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PessoasList;