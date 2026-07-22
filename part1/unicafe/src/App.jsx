import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine text="positive" value={positive + " %"}></StatisticLine>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button onClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
