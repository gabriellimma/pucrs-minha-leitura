import ListaLivrosComponent from "../ListaLivrosComponent/ListaLivrosComponent";

export default function MeusLivrosPageComponent(props) {
    
    const booklist = props.booklist;

    return (
        <ListaLivrosComponent
        upperTitle="sua biblioteca pessoal"
        title="livros cadastrados"
        subtitle="veja seu progresso nas leituras e compartilhe com seus amigos"
        booklist={booklist}
      ></ListaLivrosComponent>
    )
}