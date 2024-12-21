import React from 'react'
import './Resultoperation.css'

interface Iprops {
  operation: string;
  result: string;
}
const Resultoperation = (props:Iprops) => {
  const symbol = props.result[1];
  const number = props.result.slice(2);
  return (
    <div className="result">
      <p>{props.operation}</p>
      <p>{symbol}</p>
      <span>&nbsp;{number}</span>
    </div>
  )
}

export default Resultoperation