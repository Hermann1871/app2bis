import axios from "axios";
import { useEffect, useState } from "react"

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


    const [characters, setCharacters] = useState<Character[]>([])
    useEffect(
        () => {
            (async () => {
                const result = await axios.get('https://rickandmortyapi.com/api/character')
                setCharacters(result.data.results);

            })()
            // axios.get('https://rickandmortyapi.com/api/character')
            //     .then((result) => {
            //         setCharacters(result.data.results);
            //     })
        }, [])



    return <>{characters.map((item, index) => <li key={index}>{item.name}</li>)}</>

}