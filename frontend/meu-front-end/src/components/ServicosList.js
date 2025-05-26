
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, CircularProgress, Alert } from '@mui/material';
import ServicoCard from './ServicoCard';

function ServicosList() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        
        const response = await fetch('http://localhost:5148/api/Servicos'); 
        if (!response.ok) {
       
          const errorText = await response.text();
          throw new Error(`Erro HTTP! status: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        setServicos(data);
      } catch (err) {
        console.error("Erro ao buscar serviços:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicos();
  }, []);

  const handleSelectService = (servico) => {
    alert(`Você selecionou o serviço: ${servico.id} - Manutenção: ${servico.manutencao ? 'Sim' : 'Não'}`);
    console.log('Serviço selecionado:', servico);

  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Carregando serviços...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">Erro ao carregar serviços: {error}</Alert>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Verifique se o seu backend C# está rodando em https://localhost:7070 e se as configurações de CORS estão corretas (veja o Passo 2).
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
        Nossos Serviços Disponíveis
      </Typography>
      {servicos.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary">
          Nenhum serviço disponível no momento.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {servicos.map((servico) => (
            <Grid item key={servico.id} xs={12} sm={6} md={4} lg={3}>
              <ServicoCard servico={servico} onSelect={handleSelectService} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ServicosList;