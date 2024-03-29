import './App.css';
import Button from './componets/button';

import Screen from './componets/screen';
import ButtonClear from './componets/buttonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './componets/logo';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResults = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor agregue valores para realizar los cálculos.")
    }
  };



  return (
    <div className="App">
    <Logo />
    <div className='container-calculator'>
      <Screen input={ input } />
      <div className='fila'>
        <Button handleClick={ addInput }>1</Button>
        <Button handleClick={ addInput }>2</Button>
        <Button handleClick={ addInput }>3</Button>
        <Button handleClick={ addInput }>+</Button>
      </div>
      <div className='fila'>
        <Button handleClick={ addInput }>4</Button>
        <Button handleClick={ addInput }>5</Button>
        <Button handleClick={ addInput }>6</Button>
        <Button handleClick={ addInput }>-</Button>
      </div>
      <div className='fila'>
        <Button handleClick={ addInput }>7</Button>
        <Button handleClick={ addInput }>8</Button>
        <Button handleClick={ addInput }>9</Button>
        <Button handleClick={ addInput }>*</Button>
      </div>
      <div className='fila'>
        <Button handleClick={ calculateResults }>=</Button>
        <Button handleClick={ addInput }>0</Button>
        <Button handleClick={ addInput }>.</Button>
        <Button handleClick={ addInput }>/</Button>
      </div>
      <div className='fila'>
        <ButtonClear handleClick={() => setInput('')}>
          Clear
        </ButtonClear>
      </div>
    </div>
    </div>
  );
}

export default App;
