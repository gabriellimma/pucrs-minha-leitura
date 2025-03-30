import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavComponent() {

    return (
    
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#f9f9fb' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: 6 }}>
        <Link
          to="/"
          sx={{
            color: '#0a0a23',
            textTransform: 'none',
            fontWeight: 'normal',
            fontSize: '0.9rem',
          }}
        >
            início
        </Link>
        <Link
          to="/cadastro"
          sx={{
            color: '#0a0a23',
            textTransform: 'none',
            fontWeight: 'normal',
            fontSize: '0.9rem',
          }}
        >
          cadastrar livro
        </Link>
        <Link
          to="/meus-livros"
          sx={{
            color: '#0a0a23',
            textTransform: 'none',
            fontWeight: 'normal',
            fontSize: '0.9rem',
          }}
        >
          meus livros
        </Link>
      </Toolbar>
    </AppBar>
  );
}
