import CadastroComponent from "../components/CadastroComponent/CadastroComponent";

export default function CadastroPageComponent(props) {

    const news = props.news;

    return (
        <CadastroComponent
            upperTitle="leia todo dia"
            title="cadastre seu livro"
            subtitle="comprou um livro novo ou quer cadastrar sua nova leitura favorita?"
            imageLink="https://unsplash.com/photos/closed-wabi-sabi-book-on-brown-wooden-surface-ZT4_d3-vyUg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            imageAltText="imagem de um livro e um café sobre a mesa"
            imageCredit="Annie Spratt"
            imageAuthorRef={news[0].imageAuthorRef}
        ></CadastroComponent>
    )
}