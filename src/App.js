import './App.css';
import { useState } from "react";

const messages = [
  "Eat 🍴",
  "Code 👨‍💻",
  "Sleep 😪",
];

function App() {
  const [step, setStep] = useState(1);           // [0] -> initialize variable , 
  const [isOpen, setIsOpen] = useState(true);    // [1] -> fn. to update the value of var.

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);   // this also works but the below one is better to use
      setStep((s)=>s-1);      // (curr state)=>new state  --> updating state based on curr state
    }
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      setStep((s)=>s+1);
    }
  }

  return (
    <>
      <button className="close" onClick={()=>setIsOpen((is)=>!is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">Step {step}: {messages[step - 1]}</p>

          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >Previous</button>

            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >Next</button>

          </div>
        </div>
      )}
    </>
  );
}

export default App;
