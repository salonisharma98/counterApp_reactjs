
import React, { useState } from 'react';
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="xyz">
            <div className="wrapper">
            <div class="circle-wrapper">
    <div class="circle-zero"><h1 className="countsize">{count}</h1></div>
    <div class="circle-one"></div>
    <div class="circle-two"></div>
    <div class="circle-three"></div>
    <div class="circle-four"></div>
    <div class="circle-five"></div>
    <div class="circle-six"></div>
  </div>
  </div>
            <button onClick={() => setCount(count + 1)} type="button" class="btn btn-success">+</button>
            <button onClick={() => setCount(count - 1)} type="button" class="btn btn-success">-</button>
        </div>
    );
}
export default Counter;