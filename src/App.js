import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
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
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="contenedor">
      <div className="calculadora">
        <Display value={input} />
        <Keypad onButtonClick={agregarInput} onClear={limpiar} onCalculate={calcularResultado} />
      </div>
    </div>
  );
}

export default App;


