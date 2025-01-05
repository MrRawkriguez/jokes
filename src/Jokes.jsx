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
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button> {/* use ternerary instead*/}
            {/*{!isShown && <button onClick={toggleShown}>Show Punchline</button>}
            {isShown && <button onClick={toggleShown}>Hide Punchline</button>}*/}
            <hr />
        </article>
    )
}

export default Jokes