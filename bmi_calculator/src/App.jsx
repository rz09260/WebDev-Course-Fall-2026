import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
  setError("");

  const w = parseFloat(weight);
  const h = parseFloat(height);

  if (isNaN(w) || isNaN(h)) {
    setError("Please enter valid numbers.");
    return;
  }

  if (w <= 0 || h <= 0) {
    setError("Weight and height must be greater than 0.");
    return;
  }

  const bmiValue = Number((w / (h * h)).toFixed(1));

  setBmi(bmiValue);

  if (bmiValue < 18.5) {
    setCategory("Underweight");
  } else if (bmiValue < 25) {
    setCategory("Normal Weight");
  } else if (bmiValue < 30) {
    setCategory("Overweight");
  } else {
    setCategory("Obese");
  }
};

const resetForm = () => {
  setWeight("");
  setHeight("");
  setBmi(null);
  setCategory("");
  setError("");
};

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <div className="input-group">
    <label>Weight (kg)</label>
    <input
      type="number"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      placeholder="Enter weight in kg"
    />
  </div>

  <div className="input-group">
    <label>Height (m)</label>
    <input
      type="number"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      placeholder="Enter height in meters"
    />
</div>
      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetForm}>Reset</button>
      </div>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;