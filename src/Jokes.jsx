function Jokes (props) {

    console.log(props.cooments)
    return(
        <article>
                {props.joke && <h3 className="joke">Setup: {props.joke}</h3>}
                <h3>Punch Line: {props.punchline}</h3>
                <hr />
        </article>
    )
}

export default Jokes