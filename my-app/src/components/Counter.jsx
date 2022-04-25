//ejercicio de para pracitcar Hooks

import React,{useState} from 'react'

const Counter = () => {

const [counter, setCounter] = useState(0)


  return (
    <div className="container=counter">
        <h1>contador</h1>
        <div className='number'>
        <h3>{counter}</h3>
        <div>

            <button onClick={()=>setCounter(counter+1)}>+1</button>
            <button onClick={()=>setCounter(0)}>reset</button>
            <button onClick={()=>setCounter(counter-1)}>=1</button>
        </div>

        </div>
    </div>
    
  )
}

export default Counter;