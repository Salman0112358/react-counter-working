import { useState } from "react";
import "../utils/index.css"

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleMinusOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5);
  };

  const handleMinusFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };

  const handleReset = () => {
    queueRerenderWithNewCounterValue(0)
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p id ="current-value">Current value: <b>{counterValueFromCurrentRender}</b></p>
      <button className="positive-btn" onClick={handleAddOne}>+1</button>
      <button className="negative-btn" onClick={handleMinusOne}>-1</button>
      <hr />
      <button className="positive-btn" onClick={handleAddFive}>+5</button>
      <button className="negative-btn" onClick={handleMinusFive}>-5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
