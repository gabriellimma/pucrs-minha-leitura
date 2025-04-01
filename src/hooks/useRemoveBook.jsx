function useRemoveBook(setShouldReload) {
    async function removeBook(idLivro) {
      const response = await fetch(`http://localhost:5000/books/${idLivro}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setShouldReload(prev => !prev);
      if (!response.ok) {
        throw new Error("Falha ao remover livro");
      }
  
      return await response.json();
    }
  
    return { removeBook };
  }

  export default useRemoveBook;