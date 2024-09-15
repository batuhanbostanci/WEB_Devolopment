import { createContext, useContext, useState } from "react";

//1. Create a context
const CounterContext = createContext();

//2.Create a parent component

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const incresae = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, incresae, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

//3.Create child components to help implementing comon tasks

function Count() {
  const { count } = useContext(CounterContext);

  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children} </span>;
}

function Increase({ icon }) {
  const { incresae } = useContext(CounterContext);
  return <button onClick={incresae}>{icon}</button>;
}

function Descrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

//4.Add child components as properties of the parent component

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Descrease = Descrease;

export default Counter;
