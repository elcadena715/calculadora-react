import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const limpiar = () => {
    setInput('');
  };

  const calcularResultado = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculadora">
      <div className="display">{input || "0"}</div>
      <div className="teclado">
        {"123+456-789*0./".split('').map((val) => (
          <button onClick={() => agregarInput(val)} key={val}>{val}</button>
        ))}
        <button onClick={limpiar}>C</button>
        <button onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
}

export default App;

