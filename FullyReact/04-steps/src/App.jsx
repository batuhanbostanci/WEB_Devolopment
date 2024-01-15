import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(2);
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) setStep((step) => step - 1);
  }

  function next() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((s) => !s);
        }}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={previous}
              text="Previous"
            >
              <span> 👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={next}
              text="next"
            >
              Next <span> 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
