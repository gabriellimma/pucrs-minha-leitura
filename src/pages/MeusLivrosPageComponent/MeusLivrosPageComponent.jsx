import ListaLivrosComponent from "../../components/ListaLivrosComponent/ListaLivrosComponent";

export default function MeusLivrosPageComponent(props) {
    
    const booklist = props.booklist;

    return (
        <ListaLivrosComponent
        upperTitle="sua biblioteca pessoal"
        title="livros cadastrados"
        subtitle="veja seu progresso nas leituras e compartilhe com seus amigos"
        booklist={booklist}
        useRemoveLivro={props.useRemoveLivro}
      ></ListaLivrosComponent>
    )
}