import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [percantage1, setPercantage1] = useState(0);
  const [percantage2, setPercantage2] = useState(0);

  const totalPercantage = (percantage1 + percantage2) / 2;
  function handeReset() {
    setBill(0);
    setPercantage1(0);
    setPercantage2(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill}>
        How much was the bill
      </Bill>
      <Percantege percantage={percantage1} setPercantage={setPercantage1}>
        How did you like the service?
      </Percantege>
      <Percantege percantage={percantage2} setPercantage={setPercantage2}>
        How did your friend like the service?
      </Percantege>
      <Output bill={bill} percantage={totalPercantage}>
        Your Pay
      </Output>
      <Reset handeReset={handeReset} />
    </div>
  );
}

function Bill({ children, bill, setBill }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(event) => {
          setBill(Number(event.target.value));
        }}
      />
    </div>
  );
}

function Percantege({ children, percantage, setPercantage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        name="percantage"
        value={percantage}
        onChange={(event) => {
          setPercantage(Number(event.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percantage }) {
  return (
    <div>
      <h3>
        Your Pay ${bill + percantage} ({`$${bill} + $${percantage} tip`})
      </h3>
    </div>
  );
}

function Reset({ handeReset }) {
  return <button onClick={handeReset}>Reset</button>;
}

export default App;
