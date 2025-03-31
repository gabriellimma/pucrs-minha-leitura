import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/system';
import news from './data/noticias.json'
import NavComponent from './components/NavComponent/NavComponent';
import HomePageComponent from './pages/HomePageComponent/HomePageComponent';
import CadastroPageComponent from './pages/CadastroPageComponent/CadastroPageComponent';
import MeusLivrosPageComponent from './pages/MeusLivrosPageComponent/MeusLivrosPageComponent';
import useBooklist from './hooks/useBooklist';

function App() {

  const booklist = useBooklist().booklist

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
          <Route path='/cadastro' element={<CadastroPageComponent news={news}/>} />
          <Route path='/meus-livros' element={<MeusLivrosPageComponent booklist={booklist}/>} />
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
