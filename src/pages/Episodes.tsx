import { Link } from "react-router-dom"

import axios from "axios";
import { useEffect, useState } from "react"


// type Origin = {
//     name: string;
//     url: string;
// };

// type Location = {
//     name: string;
//     url: string;
// };

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
};


export const Episodes = () => {
    console.log("EPISODES Loading Episodes")

    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [episodes, setEpisodes] = useState<Episode[]>([])

    useEffect(
        () => {
            (async () => {
                // const result = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
                const result = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
                setEpisodes(result.data.results);
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


    return (
        <>
            <h1>Episodi</h1>
            <p>Paragrafo</p>
            <Link to="/">Link alla Home</Link>
            <br />
            <Link to="/episodes">Link agli episodi</Link>
            <br />
            <Link to="/episodesChildren">Link agli episodi - Children</Link>

            <p>Pagina: {currentPage} / {lastPage}</p>
            {currentPage !== 1 && <button onClick={() => setCurrentPage(1)}>First page</button>}
            {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Pagina precedente</button>}
            {currentPage < lastPage && <button onClick={() => setCurrentPage(currentPage + 1)}>Pagina successiva</button>}
            {currentPage !== lastPage && <button onClick={() => setCurrentPage(lastPage)}>Last page</button>}
            {/* <br /> */}
            <br />
            {episodes.map((item, index) =>
                // <li key={index}>{item.id} - {item.name} - {item.air_date} - {item.episode}{false && ` -  ${item.characters}`} - {item.url}</li>)}
                <li key={index}>{item.id} - {item.name} - {item.air_date} - {item.episode}{false && ' - ' + item.characters} - {item.url}</li>)}
            {/* <h1> {`isPalindrome: ${isPalindrome}`}</h1> */}
            {/* {isPalindrome && "è palindroma (con useEffect)"} */}
            
            <br />
            <br />

        </>
    )
}

