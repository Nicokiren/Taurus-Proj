// frontend/meu-front-end/src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ServicosList from './components/ServicosList'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 


const theme = createTheme({
  palette: {
    primary: {
      main: '#28a745', 
    },
    secondary: {
      main: '#007bff', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Taurus Serviços
          </Typography>
         
        </Toolbar>
      </AppBar>
      <ServicosList /> 
    </ThemeProvider>
  );
}

export default App;