import React, { useState } from 'react'
 
function Couter()  {
    const [count,setCount]= useState(0);
    
    const Decrease = ()=>{
        setCount(count + 1);
    }
    const Increase = ()=>{
        setCount(count - 1);
    }

    return (
        <div> 
          <h1>{count}</h1>
        <button onClick={Increase}>
     Increase
     </button>
    
        <button onClick={Decrease}>
        Decrease
    </button>
     </div>
    )

}

export default Couter;
