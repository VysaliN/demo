import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>useState Hook</h2>
      <div className="border border-dark">
        <p className="m-5 display-3">{count}</p>
        <button className="p-1 m-3 btn btn-success" onClick={increaseCount}>
          Increase
        </button>
        <button className="p-1 m-3 btn btn-danger" onClick={decreaseCount}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
