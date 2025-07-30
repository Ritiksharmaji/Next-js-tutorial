'use client';
import React from 'react';
import style from '../style.module.css'
function ColorPage() {
    const[color, setColor] = React.useState('red');
    const changeColor = () => {
        setColor(color === 'red'? style.green : style.red);
    };
  return (
    <div>
        <h1 className={color}>Color Page</h1>
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default ColorPage