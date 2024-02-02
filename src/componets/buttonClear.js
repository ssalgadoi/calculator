import React from "react";
import '../style/buttonClear.css';


const ButtonClear = (props) => (
    <button className="button-clear" 
    onClick={ props.handleClick }>
    { props.children }
    </button>
);

export default ButtonClear;