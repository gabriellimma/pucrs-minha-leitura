import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/system';
import booklist from './data/booklist.json'
import news from './data/noticias.json'
import NavComponent from './components/NavComponent/NavComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import CadastroPageComponent from './CadastroPageComponent/CadastroPageComponent';
import MeusLivrosPageComponent from './components/MeusLivrosPageComponent/MeusLivrosPageComponent';

function App() {
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
