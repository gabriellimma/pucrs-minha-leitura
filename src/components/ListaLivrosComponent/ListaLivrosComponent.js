import TitleComponent from '../TitleComponent/TitleComponent'
import { Button } from '@mui/material';
import { Box, Grid } from '@mui/system';
import './ListaLivrosComponent.css';
import LivroCardComponent from '../LivroCardComponent/LivroCardComponent';

export default function ListaLivrosComponent(props) {
    const booklist = props.booklist

    return (
        <Grid direction="column" alignItems="center" sx={{ minHeight: '80vh' }}>
            <Grid item size={12}>
                <TitleComponent
                    upperTitle={props.upperTitle}
                    title={props.title}
                    subtitle={props.subtitle}
                />
            </Grid>

            <Grid item size={12}>
                <Box sx={{ p: {
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2
                }, backgroundColor: '#f9f9fb', borderRadius: '8px' }}>
                    <Grid container spacing={2}>
                        {booklist.length > 0 ?
                            props.booklist.map((book) => {

                                if (book.id === 1) {
                                    return (
                                        <LivroCardComponent
                                            numero={book.id}
                                            autor={book.author}
                                            titulo={book.title}
                                            genero={book.genre}
                                            lidoEm={book.readAt}
                                            destaque={true}
                                        ></LivroCardComponent>
                                    )
                                } else {
                                    return (
                                        <LivroCardComponent
                                            numero={book.id}
                                            autor={book.author}
                                            titulo={book.title}
                                            genero={book.genre}
                                            lidoEm={book.readAt}
                                        ></LivroCardComponent>
                                    )
                                }


                            })
                            :
                            <>
                                <p>ops... parece que não existem livros cadastrados</p>
                                <Grid item size={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                    <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #3b5bfb 0%, #5f70ff 100%)' }}>
                                        Cadastrar livros
                                    </Button>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Box>
            </Grid>


        </Grid>
    );
}