function useAddBook(setShouldReload) {
    async function addBook(novoLivro) {
      const response = await fetch("http://localhost:5001/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro)
      });
      setShouldReload(prev => !prev);
      if (!response.ok) {
        throw new Error("Falha ao adicionar livro");
      }
  
      return await response.json();
    }
  
    return { addBook };
  }

  export default useAddBook;