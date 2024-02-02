import React from "react";
import '../style/buttonClear.css';


const ButtonClear = (props) => (
    <div className="button-clear">
        { props.children }
    </div>
);

export default ButtonClear;