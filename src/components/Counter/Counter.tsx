import './Counter.css'

import { useState } from "react"

export const Counter = () => {
    const [x, setX] = useState(50)
let a = x;
    return <div>
        <h1>{x}</h1>
        <button onClick={() =>  setX(x + 1) }>Increment</button><br/><br/>
        <button onClick={() =>  setX(--a) }>Decrement</button><br/><br/>
        <button onClick={() =>  setX(x * 10) }>Multiply</button>
    </div>

}