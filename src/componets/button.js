import React from 'react';
import '../style/button.css';


function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }
  if (isOperator(props.children)){
    return (
      <div 
      className="button-container operator"
      onClick={() => props.handleClick(props.children) }>
      { props.children }
      </div>
    );
  } else {
    return (
      <div 
      className="button-container"
      onClick={() => props.handleClick(props.children) }>
      { props.children }
      </div>
    );
  }
}

export default Button;