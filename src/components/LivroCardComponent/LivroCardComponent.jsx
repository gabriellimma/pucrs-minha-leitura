import React from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { Grid } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function LivroCardComponent({ numero, autor, titulo, genero, status, lidoEm, destaque, endpointRemoveLivros }) {

  const navigate = useNavigate();

  const handleDelete = async (numero) => {
    const confirmacao = window.confirm(`Tem certeza que deseja excluir "${titulo}"?`);
    if (confirmacao) {
      console.log(`Livro "${titulo}" será deletado.`);
      endpointRemoveLivros(numero);
    }
  }

  return (
    <Paper
      elevation={destaque ? 2 : 0}
      sx={{
        width: {
          lg: '45%',
          md: '100%',
          sm: '100%',
          xs: '100%'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: destaque ? '2px solid transparent' : '1px solid #eee',
        borderRadius: '8px',
        padding: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2
        },
        borderImage: destaque ? 'linear-gradient(to bottom left, #9747FF, #08D657) 1' : 'none'
      }}
    >
      <Box
        sx={{
          width: { xs: 70, sm: 70, md: 100 },
          height: { xs: 70, sm: 70, md: 100 },
          borderRadius: '8px',
          background: destaque
            ? 'linear-gradient(to bottom left, #9747FF, #08D657)'
            : '#0a0a23',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: { xs: 24, sm: 24, md: 38 },
          fontWeight: 'bold',
          mr: 2

        }}
      >
        {numero}
      </Box>

      <Grid container direction="column" sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: {
              xs: 11,
              sm: 14,
              md: 16
            }
          }}>{autor}</Typography>
        <Typography variant="h7" sx={{ fontWeight: 'bold', fontSize: { xs: 14, sm: 16, md: 20 } }}>{titulo}</Typography>
        <Typography variant="body2" sx={{ color: '#aaa', fontSize: { xs: 11, sm: 14, md: 16 } }}>{genero}</Typography>
        <Typography variant="body2" sx={{ color: destaque ? '#3b5bfb' : '#000', fontSize: { xs: 11, sm: 14, md: 16 }, fontWeight: '500' }}>
          {lidoEm && lidoEm.toLowerCase() !== 'lendo' ? `Lido em ${lidoEm}` : "Lendo"}
        </Typography>
      </Grid>

      <Box sx={{ display: 'flex', gap: 0 }}>
        <IconButton>
          <DeleteIcon
            sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }}
            onClick={() => handleDelete(numero)}
          />
        </IconButton>
        <IconButton onClick={() => navigate('/cadastro', {
          state: {
            livroEditado: {
              id: numero,
              title: titulo,
              author: autor,
              genre: genero,
              readAt: lidoEm
            }
          }
        })}>
          <EditIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
        </IconButton>
      </Box>
    </Paper>
  );
}