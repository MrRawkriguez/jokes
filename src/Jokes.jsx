import { useState } from "react"

function Jokes (props) {

    const [isShown, setIsShown] = useState(false)

    function toggleShown () {
        setIsShown(prevShown => !prevShown)
    }

    console.log(isShown)

    return(
        <article>
            {props.joke && <h3>{props.joke}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </article>
    )
}

export default Jokes