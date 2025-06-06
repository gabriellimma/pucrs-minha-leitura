import { useState, useEffect } from "react";

function useBooklist(shouldReload) {

    const [booklist, setBooklist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setError] = useState(null);

    useEffect(() => {
        async function getBooks() {
            try {
                const response = await fetch('http://localhost:5000/books');
                if (!response.ok) {
                    throw new Error("falha ao recuperar livros");
                }
                const data = await response.json();
                setBooklist(data)
                setLoading(false)
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        getBooks();
    }, [shouldReload])

    return { booklist, loading, erro }
}

export default useBooklist;