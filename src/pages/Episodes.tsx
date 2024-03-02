import { Link } from "react-router-dom"

export const Episodes = () => {
    console.log("EPISODES Loading Episodes")
    return <>
        <h1>Episodi</h1>
        <p>Paragrafo</p>
        <Link to="/">Link alla Home</Link>
        <br />
        <Link to="/episodes">Link agli episodi</Link>
    </>



}