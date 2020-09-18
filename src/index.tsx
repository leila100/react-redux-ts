import React, { useState } from "react";
import ReactDOM from "react-dom";
import { JsxElement } from "typescript";

interface AppProps {
  color?: string; //Add ? to signify that color is an optional prop
}

const App = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const increment = (): void => setCounter((prevCounter) => prevCounter + 1);

  const decrement = (): void => setCounter((prevCounter) => prevCounter - 1);

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      {counter} - {props.color}
    </div>
  );
};

ReactDOM.render(<App color='red' />, document.querySelector("#root"));
