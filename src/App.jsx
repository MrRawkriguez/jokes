import './App.css'
import Jokes from "./Jokes"

function App() {

  return (
    <>
    <Jokes
      punchline="Conditional rendering. "
      upVotes={10}
      isPun={true}
      comments={[
        {author: "", text: "", title: ""},
        {author: "", text: "", title: ""}
      ]}
    />
    <Jokes
      joke="How did the hacker escape the police?"
      punchline="He just rasnomware!"
      isPun={true}
    />
    <Jokes
      joke="Why don't pirates travel on mountain roads?"
      punchline="Scurvy."
      isPun={true}
    />
    <Jokes
      joke="Why do bees stay in the hive in the winter?"
      punchline="Swarm."
      isPun={true}
    />
    <Jokes
      joke="What's the best thing about switzerland?"
      punchline="Cheese."
      isPun={false}
    />
    </>
  )
}

export default App
