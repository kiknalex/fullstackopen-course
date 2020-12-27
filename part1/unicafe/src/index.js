import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.review}</button>
  )
}
const Statistic = (props) => {
  return (
    <p>{props.text}:{props.value}</p>
  )
}
const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if(total === 0) {return (<h1>No Feedback Given</h1>)}
  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <tr><td><Statistic text="good" value={good} /> </td></tr>
      <tr><td><Statistic text="neutral" value={neutral} /></td></tr>
      <tr><td><Statistic text="bad" value={bad} /></td></tr>
      <tr><td><Statistic text="total" value={total} /></td></tr>
      <tr><td><Statistic text="average" value={average} /></td></tr>
      <tr><td><Statistic text="positive" value={positive} /></td></tr>
      </table>
    </div>
  )
}

const handleClick = () => {

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log("good in function:", good)
    calcAverage()
    calcPositive()
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    calcAverage()
    calcPositive()
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    calcAverage()
    calcPositive()
  }
  const calcAverage = () => {
    console.log("good not in function:", good)
    console.log(bad)
    setAverage((good - bad) / (total - neutral))
  }
  const calcPositive = () => {
    setPositive(100 / (total / good) + "%")
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} review={"good"} />
      <Button handleClick={increaseNeutral} review={"neutral"} />
      <Button handleClick={increaseBad} review={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)