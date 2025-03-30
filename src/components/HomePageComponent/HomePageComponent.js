import TitleComponent from "../TitleComponent/TitleComponent";
import InfoComponent from "../InfoComponent/InfoComponent";

export default function HomePageComponent(props) {

    const news = props.news;

    return (
        <>
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
        </>
    )
}