import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/system';
import { useState } from 'react';
import news from './data/noticias.json'
import NavComponent from './components/NavComponent/NavComponent';
import HomePageComponent from './pages/HomePageComponent/HomePageComponent';
import CadastroPageComponent from './pages/CadastroPageComponent/CadastroPageComponent';
import MeusLivrosPageComponent from './pages/MeusLivrosPageComponent/MeusLivrosPageComponent';
import useBooklist from './hooks/useBooklist';
import useAddBook from './hooks/useAddBook';
import useRemoveBook from './hooks/useRemoveBook';
import useEditBook from './hooks/useEditBook';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

  const [shouldReload, setShouldReload] = useState(false);
  const endpointGetLivros = useBooklist(shouldReload).booklist;
  const useCadastrarNovoLivro = useAddBook(setShouldReload).addBook;
  const useRemoveLivro = useRemoveBook(setShouldReload).removeBook;
  const useEditaLivro = useEditBook(setShouldReload).editBook;

  return (
    <Router>
      <NavComponent></NavComponent>
      <Grid container spacing={0} sx={{
        px: {
          xs: 2,
          sm: 14,
          md: 24
        }, marginTop: 10
      }}>
        <Routes>
          <Route path='/' element={<HomePageComponent news={news}/>} />
          <Route path='/cadastro' element={<CadastroPageComponent 
            news={news}
            useCadastrarNovoLivro={useCadastrarNovoLivro}
            useEditaLivro={useEditaLivro}
            />} />
          <Route path='/meus-livros' element={<MeusLivrosPageComponent 
            booklist={endpointGetLivros}
            useRemoveLivro={useRemoveLivro}
          />} />
        </Routes>
      </Grid>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
