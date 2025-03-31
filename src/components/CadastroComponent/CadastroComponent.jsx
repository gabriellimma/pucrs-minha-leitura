import TitleComponent from '../TitleComponent/TitleComponent'
import { TextField, Button } from '@mui/material';
import { Box, Grid } from '@mui/system';
import { useState } from 'react';
import './CadastroComponent.css';
import { Link } from 'react-router-dom';

export default function CadastroComponent(props) {

    const cadastrarNovoLivro = props.useCadastrarNovoLivro;

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [dataLeitura, setDataLeitura] = useState('');

    const handleCadastro = async () => {

        if (!titulo || !autor || !genero) {
            alert("Preencha os campos obrigatórios.");
            return;
        }

        const novoLivro = {
            title: titulo,
            author: autor,
            genre: genero,
            readAt: dataLeitura
        }

        try {
            await cadastrarNovoLivro(novoLivro);
            setTitulo('');
            setAutor('');
            setGenero('');
            setDataLeitura('');
            alert('Livro cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error)
            alert("Erro ao cadastrar livro, tente novamente");
        }

    }

    return (
        <Grid direction="column" alignItems="center" sx={{ minHeight: '90vh' }}>
            <Grid item size={12}>
                <TitleComponent
                    upperTitle={props.upperTitle}
                    title={props.title}
                    subtitle={props.subtitle}
                />
            </Grid>

            <Grid item size={12} >
                <Box sx={{ p: 4, backgroundColor: '#f9f9fb', borderRadius: '8px' }}>
                    <Grid container spacing={2}>
                        {/* Formulário */}
                        <Grid item size={{ xs: 12, md: 8 }}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="nome do livro"
                                        variant="outlined"
                                        required
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="nome do autor"
                                        variant="outlined"
                                        required
                                        value={autor}
                                        onChange={(e) => setAutor(e.target.value)} />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="gênero literário"
                                        variant="outlined"
                                        required
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="lido em"
                                        variant="outlined"
                                        helperText="eg: 22/03/2025 ou deixe vazio se você ainda não começou a ler"
                                        value={dataLeitura}
                                        onChange={(e) => setDataLeitura(e.target.value)}
                                    />
                                </Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: (!titulo.trim() || !autor.trim() || !genero.trim()) ? 'grey.400' : '#3b5bfb ',
                                            '&:hover': {
                                                backgroundColor: (!titulo.trim() || !autor.trim() || !genero.trim()) ? 'grey.500' : '#2141E3'
                                            }
                                        }}
                                        onClick={handleCadastro}
                                        disabled={!titulo.trim() || !autor.trim() || !genero.trim()}
                                        >
                                        Cadastrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Imagem */}
                        <Grid item size={4} sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}>
                            <Box sx={{ position: 'relative' }}>
                                <img
                                    src="/images/livro-cadastro.png"
                                    alt="Livro"
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 8,
                                        right: 16,
                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                        color: '#fff',
                                        padding: '0.3rem 0.6rem',
                                        borderRadius: '0.3rem',
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    {
                                        props.imageAuthorRef && <a
                                            href={props.imageLink}
                                            target='_blank'
                                            rel="noreferrer"
                                            style={{ color: '#fff', textDecoration: 'none' }}
                                        >
                                            Foto por {props.imageCredit}
                                        </a>
                                    }
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid item size={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                        component={Link}
                        to="/meus-livros"
                        variant="outlined"
                        sx={{ color: '#3b5bfb', borderColor: '#3b5bfb' }}
                        >
                        Veja seus livros cadastrados
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}