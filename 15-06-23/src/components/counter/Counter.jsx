import { useState } from "react";
import "./index.css";

const Counter = () => {
  // let value = 0;
  const [value, setValue] = useState(0);

  const onIncrement = () => {
    console.log("Value corrisponde a:", value);
    setValue((prev) => (prev += 1));
    // value = value + 1;
  };
  const onDecrement = () => {
    console.log("Value corrisponde a:", value);
    setValue(value - 1);
    // value = value - 1;
  };

  return (
    <div className="Counter">
      <button onClick={onDecrement}>-</button>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
