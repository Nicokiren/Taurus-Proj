// frontend/meu-front-end/src/components/ServicoCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function ServicoCard({ servico, onSelect }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR'); // Formata a data para DD/MM/AAAA
  };

  const formatTime = (timeString) => {
    // timeString pode vir como "HH:MM:SS" ou "HH:MM:SS.ms"
    // Pegar apenas HH:MM
    const parts = timeString.split(':');
    return `${parts[0]}:${parts[1]}`;
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Serviço #{servico.id}
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Manutenção:" secondary={servico.manutencao ? 'Sim' : 'Não'} />
            {servico.manutencao ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
          </ListItem>
          <ListItem>
            <ListItemText primary="Limpeza:" secondary={servico.limpeza ? 'Sim' : 'Não'} />
            {servico.limpeza ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
          </ListItem>
          <ListItem>
            <ListItemText primary="Troca de Óleo:" secondary={servico.trocaDeOleo ? 'Sim' : 'Não'} />
            {servico.trocaDeOleo ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
          </ListItem>
          <ListItem>
            <ListItemText primary="Orçamento:" secondary={servico.orcamento ? 'Sim' : 'Não'} />
            {servico.orcamento ? <CheckCircleOutlineIcon color="success" /> : <HighlightOffIcon color="error" />}
          </ListItem>
          <ListItem>
            <ListItemText primary="Data:" secondary={formatDate(servico.data)} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hora:" secondary={formatTime(servico.hora)} />
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button size="small" variant="contained" color="primary" onClick={() => onSelect(servico)}>
          Selecionar Serviço
        </Button>
      </CardActions>
    </Card>
  );
}

export default ServicoCard;