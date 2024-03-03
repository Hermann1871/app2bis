import axios from "axios";
import { useEffect, useState } from "react"
import "./Characters.css";

type Origin = {
    name: string;
    url: string;
};

type Location = {
    name: string;
    url: string;
};

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
};


export const Characters = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(
        () => {
            (async () => {
                // const result = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
                const result = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
                setCharacters(result.data.results);
                setLastPage(result.data.info.pages)
                console.log("Pages Total", result.data.info.pages)
                console.log("Data", result.data)
                console.log("Result", result)
            })()
            // axios.get('https://rickandmortyapi.com/api/character')
            //     .then((result) => {
            //         setCharacters(result.data.results);
            //     })
        }, [currentPage])

    // useEffect(
    //     () => {
    //         (async () => {
    //             const result = await axios.get(`https://rickandmortyapi.com/api/character`)
    //             // const result = await axios.get(`https://rickandmortyapi.com/api/episode`)
    //             setLastPage(result.data.info.pages)
    //             console.log("Pages Total",result.data.info.pages)
    //         })()
    //     }, [])

    return <>
        <p>Pagina: {currentPage} / {lastPage}</p>
        {currentPage !== 1 && <button onClick={() => setCurrentPage(1)}>First page</button>}
        {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Pagina precedente</button>}
        {currentPage < lastPage && <button onClick={() => setCurrentPage(currentPage + 1)}>Pagina successiva</button>}
        {currentPage !== lastPage && <button onClick={() => setCurrentPage(lastPage)}>Last page</button>}
        <br></br>
        {characters.map((item, index) => <li key={index}>{item.name}</li>)}</>

}