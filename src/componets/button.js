import React from 'react';
import '../style/button.css';


function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }
  return (
    <button 
    className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
    onClick={() => props.handleClick(props.children) }>
    { props.children }
    </button>
  )
}

export default Button;