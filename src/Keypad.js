import React from 'react';
import Button from './Button';
import './Keypad.css';

const teclas = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/", "C", "="];

const Keypad = ({ onButtonClick, onClear, onCalculate }) => {
  return (
    <div className="teclado">
      {teclas.map((key) => {
        if (key === "C") {
          return <Button key={key} onClick={onClear}>{key}</Button>;
        } else if (key === "=") {
          return <Button key={key} onClick={onCalculate}>{key}</Button>;
        } else {
          return <Button key={key} onClick={() => onButtonClick(key)}>{key}</Button>;
        }
      })}
    </div>
  );
};

export default Keypad;