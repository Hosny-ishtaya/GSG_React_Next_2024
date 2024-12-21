import React from 'react'
import './Calculator.css'
import {useState} from 'react'
import Resultoperation from '../Calculator.result/Resultoperation.tsx'
const Calculator = () => {
    const [oper ,setOper] = useState("")
    const [result,setResult] = useState("");

    const handleButtonClick = (value) => {
        setOper((prevOper) => prevOper + value);
      };
  return (
    <div className="Calculator-container">
        <>
         <Resultoperation  operation={oper} result={result}/>
        </>
       
        <div className="Calculator-button">
            <button className="number-button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="number-button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="number-button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="number-button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="number-button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="number-button" onClick={() => handleButtonClick('6')}>6</button>
            <button className="number-button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="number-button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="number-button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="number-button" onClick={() => handleButtonClick('0')}>0</button>
            <button className="number-button-operator" onClick={() => handleButtonClick(' + ')}>+</button>
            <button className="number-button-operator" onClick={() => handleButtonClick(' - ')}>-</button>
            <button className="number-button-equal" onClick={() => setResult(" = "+eval(oper))}>=</button>  
        </div>
    </div>
  )
}

export default Calculator