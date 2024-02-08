import React, { useEffect, useState } from "react";
import "./styles.css";

//

export default function App() {
  const [currency, setCurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(amount);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchConversion() {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${fromCurrency}`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setResult(data.rates[fromCurrency]);
        setIsLoading(false);
      }
      if (!amount || currency === fromCurrency) return setResult(amount);
      fetchConversion();

      return function () {
        controller.abort();
      };
    },
    [currency, fromCurrency, amount]
  );

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="TRY">TRY</option>
      </select>
      <select
        value={fromCurrency}
        onChange={(event) => setFromCurrency(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="TRY">TRY</option>
      </select>
      <p>
        {result} {fromCurrency}
      </p>
    </div>
  );
}
