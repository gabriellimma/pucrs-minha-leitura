function useEditBook(setShouldReload) {
    async function editBook(novoLivro) {
      const response = await fetch(`http://localhost:5000/books`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro)
      });
      setShouldReload(prev => !prev);
      if (!response.ok) {
        throw new Error("Falha ao remover livro");
      }
  
      return await response.json();
    }
  
    return { editBook };
  }

  export default useEditBook;