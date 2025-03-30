import './App.css';
import { Grid } from '@mui/system';
import InfoComponent from './components/InfoComponent/InfoComponent';
import TitleComponent from './components/TitleComponent/TitleComponent'
import news from "./data/noticias.json"
import CadastroComponent from './components/CadastroComponent/CadastroComponent';
import ListaLivrosComponent from './components/ListaLivrosComponent/ListaLivrosComponent';
import booklist from './data/booklist.json'

function App() {
  return (
    <>
      <Grid container spacing={0} sx={{
        px: {
          xs: 2,
          sm: 14,
          md: 24
        }
      }}>
        <TitleComponent
          upperTitle="leia todo dia"
          title="minha leitura diária"
          subtitle="vença a rotina e torne-se a melhor versão de si criando sua lista de leitura, compartilhando livros e acompanhando seu progresso."
          mainButtonText="cadastre um livro"
          secondaryButtonText="veja seus livros cadastrados"
        >
        </TitleComponent>
        <InfoComponent
          upperTitle={news[0].upperTitle}
          title={news[0].title}
          paragraph={news[0].body}
          newsRefLink={news[0].refLink}
          imageLink={news[0].imageLink}
          imageAltText={news[0].imageAltText}
          imageCredit={news[0].imageAuthorName}
          imageAuthorRef={news[0].imageAuthorRef}
        ></InfoComponent>

        <CadastroComponent
          upperTitle="leia todo dia"
          title="cadastre seu livro"
          subtitle="comprou um livro novo ou quer cadastrar sua nova leitura favorita?"
          imageLink="https://unsplash.com/photos/closed-wabi-sabi-book-on-brown-wooden-surface-ZT4_d3-vyUg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          imageAltText="imagem de um livro e um café sobre a mesa"
          imageCredit="Annie Spratt"
          imageAuthorRef={news[0].imageAuthorRef}
        ></CadastroComponent>

        <ListaLivrosComponent
          upperTitle="sua biblioteca pessoal"
          title="livros cadastrados"
          subtitle="veja seu progresso nas leituras e compartilhe com seus amigos"
          booklist={booklist}
        ></ListaLivrosComponent>
      </Grid>
    </>
  );
}

export default App;
