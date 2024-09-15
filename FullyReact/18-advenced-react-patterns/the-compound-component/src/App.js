import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>My flexible counter</Counter.Label>
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Descrease icon="-" />
      </Counter>
      <div>
        <Counter>
          <Counter.Label>My flexible counter</Counter.Label>
          <Counter.Count />
          <Counter.Increase icon="+" />
          <Counter.Descrease icon="-" />
        </Counter>
      </div>
    </div>
  );
}
