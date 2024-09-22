import { useState } from "react";

const Counter: React.FC = () => {
  const [data, setData] = useState(0);

  const Increment = () => {
    setData(data + 1);
  };

  const Decrement=()=>{
    setData(data-1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>count  {data}</p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  );
};

export default Counter;
