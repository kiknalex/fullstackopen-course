import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const [points, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  )
  const [highestAnecdote, setAnecdote] = useState(anecdotes[0])
  const findOutHighestAnecdote = () => {
    let newAnecdote = highestAnecdote;
    newAnecdote = anecdotes[points.indexOf(Math.max(...points))];
    setAnecdote(newAnecdote);
  }
  const handleVoteClick = () => {
    const newPoints = [...points];
    console.log(newPoints);
    newPoints[selected] += 1;
    setVote(newPoints);
    findOutHighestAnecdote();
  }
  return (
    <div>
      {props.anecdotes[selected]}  <br/>
      <p>Points: {points[selected]}</p>
      <Button onClick={handleClick} text="Next Anecdote" />
      <Button onClick={handleVoteClick} text="Vote" />
      <h1>Anecdote with most votes</h1>
      <p>{highestAnecdote}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)