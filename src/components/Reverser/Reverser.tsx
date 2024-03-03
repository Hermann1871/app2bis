import './Reverser.css'

import { useEffect, useState } from "react"

export const Reverser = () => {
    const [text, setText] = useState("Pippo")
    const [text2, setText2] = useState("")
    const [isPalindrome, setIsPalindrome] = useState(false)


    const reverseString = (text: string) => text.split('').reverse().join('');
    const isPalindromeFunct = (text: string) => text.length > 0 && text === reverseString(text)

    useEffect(
        () => { setIsPalindrome(text === reverseString(text)) },
        [text])

    useEffect(
        () => { console.log("useEffect senza secondo parametro") },
    )
    useEffect(
        () => { console.log("useEffect con secondo parametro array vuoto") },
        [])

    // console.log(reverseString(text))

    return <div>
        <h1>{text}</h1>
        <h1> {`isPalindrome: ${isPalindrome}`}</h1>
        <h2>{text} {isPalindrome} {isPalindrome && "è palindroma (con useEffect)"}</h2>

        <input type="text" onChange={(ev) => { setText(ev.target.value) }} />
        <button onClick={() => setText(reverseString(text))}>Inverti</button><br /><br /><br />

        <input type="text" onChange={(ev) => { setText2(reverseString(ev.target.value)) }} />
        <p>{text2} {isPalindromeFunct(text2) && "è palindroma"}</p>
    </div>


}