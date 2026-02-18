import { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "sub":
        setResult(n1 - n2);
        break;
      case "mul":
        setResult(n1 * n2);
        break;
      case "div":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <br /><br />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <br /><br />

      <button onClick={() => calculate("add")}>Add</button>
      <button onClick={() => calculate("sub")}>Subtract</button>
      <button onClick={() => calculate("mul")}>Multiply</button>
      <button onClick={() => calculate("div")}>Divide</button>

      <br /><br />

      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;
