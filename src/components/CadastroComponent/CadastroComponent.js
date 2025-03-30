import TitleComponent from '../TitleComponent/TitleComponent'
import { TextField, Button } from '@mui/material';
import { Box, Grid } from '@mui/system';

import './CadastroComponent.css';

export default function CadastroComponent(props) {
    return (
        <Grid direction="column" alignItems="center" sx={{ minHeight: '80vh' }}>
            <Grid item size={12}>
                <TitleComponent
                    upperTitle={props.upperTitle}
                    title={props.title}
                    subtitle={props.subtitle}
                />
            </Grid>

            <Grid item size={12} >
                <Box sx={{ p: 4, backgroundColor: '#f9f9fb', borderRadius: '8px'}}>
                    <Grid container spacing={2}>
                        {/* Formulário */}
                        <Grid item size={{xs: 12, md: 8}}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField fullWidth label="nome do livro" variant="outlined" />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="nome do autor" variant="outlined" />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth label="gênero literário" variant="outlined" />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="lido em"
                                        variant="outlined"
                                        helperText="eg: 22/03/2025 ou deixe vazio se você ainda não começou a ler"
                                    />
                                </Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #3b5bfb 0%, #5f70ff 100%)' }}>
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
                    <Button variant="outlined" sx={{ color: '#3b5bfb', borderColor: '#3b5bfb' }}>
                        Veja seus livros cadastrados
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}