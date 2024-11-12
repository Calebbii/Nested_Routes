import React, { useState } from 'react'

function Counttracker() {

    const [count, setCount] = useState(20)

    function handleIncrement (){
        setCount(count + 1)

        console.log(count)

    }
    function handleDecrement () {
        setCount(count - 1)
        console.log(count)
    }
  return (
    <div>
      <h1>Count Tracker</h1>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counttracker
