## Nome: `Gabriel Silva Lima`

Para executar este projeto:

1. Entre na pasta do projeto no terminal:
```
cd local-baixado/pucrs-fase2-reading-journal
```

2. Rode npm install para instalar as dependências do projeto:
```
npm install
```

3. E em seguida, npm start, para iniciar a execução do projeto:
```
npm start
```

4. O front-end espera a api de livros na porta 5000 (http://localhost:5000).

Após execução do projeto, este é o resultado esperado no navegador:
![Gif mostrando o resultado esperado ao rodar este projeto](./docs/project-overview.gif)

## Introdução

Este projeto contém uma estrutura básica para um CRUD de um Reading Journal, desenvolvido na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:

### `HeaderComponent`
Renderiza a barra de navegação superior do projeto com links para navegação.

**Props:** nenhuma.

---

### `FooterComponent`
Renderiza o rodapé do projeto com uma mensagem institucional.

**Props:** nenhuma.

---

### `TitleComponent`
Exibe o título principal da página.

**Props:**
- `upperTitle` (string): o texto a ser exibido como preheader.
- `title` (string): o texto a ser exibido como título.
- `subtitle` (string): o texto a ser exibido como sub-título.
- `mainButtonText` (string): o texto a ser exibido como texto do botão principal.
- `secondaryButtonText` (string): o texto a ser exibido como texto do botão secundário.

---

### `LivroCardComponent`
Componente visual que representa um livro individual na lista. Exibe informações como título, autor, status de leitura e permite editar ou remover.

**Props:**
- `numero` (number): ID do livro.
- `autor` (string): nome do autor.
- `titulo` (string): título do livro.
- `genero` (string): gênero literário.
- `status` (string): status de leitura.
- `lidoEm` (string): data de leitura (ou "lendo").
- `destaque` (boolean): se o cartão deve ter estilo de destaque.
- `endpointRemoveLivros` (function): função executada ao clicar no ícone de remoção.

---

### `ListaLivrosComponent`
Componente responsável por renderizar a lista completa de livros.

**Props:**
- `booklist` (array): lista de livros a ser exibida.
- `useRemoveLivro` (function): função que será executada ao remover um livro.

---

### `CadastroComponent`
Formulário para cadastrar ou editar livros. O modo edição é ativado se os dados forem passados via navegação (`location.state.livroEditado`).

**Props:**
- `useCadastrarNovoLivro` (function): função para criar um novo livro.
- `useSalvarLivro` (function): alias para a função acima.
- `useEditaLivro` (function): função que edita um livro existente.

---

## Hooks personalizados

Os hooks personalizados estão localizados no diretório `./src/hooks`:

### `useBooklist`
Hook para obter a lista de livros da API.

**Uso:**
```js
const { booklist, carregarBooklist } = useBooklist();
```

Retorna a lista de livros e uma função para forçar o recarregamento.

---

### `useAddBook`
Hook para adicionar um novo livro via API.

**Uso:**
```js
const cadastrarLivro = useAddBook();
await cadastrarLivro(livro);
```

---

### `useEditaLivro`
Hook para editar um livro existente via API.

**Uso:**
```js
const editarLivro = useEditaLivro();
await editarLivro(id, livroAtualizado);
```

---

### `useRemoveLivro`
Hook para remover um livro da lista.

**Uso:**
```js
const removerLivro = useRemoveLivro();
await removerLivro(id);
```

## Conclusão

Este projeto é uma aplicação CRUD para um Reading Journal, demonstrando funcionalidades úteis para o desenvolvimento de projetos em ReactJS.
