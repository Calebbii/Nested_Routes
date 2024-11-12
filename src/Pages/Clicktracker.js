import React from 'react'
import {useState} from 'react'

function Clicktracker() {
    const [model, setModel] = useState('Toyota')
    const [year, setYear] = useState(2007)

    function handleClick() {
        // console.log("The button has been clicked")

        // model = "Audi"
        setModel('Audi')
        setYear(2013)
        
    }
  return (
    <div>
      <h1>Click Tracker</h1>
      <h3>This car is of model {model} and was made in the year {year}</h3>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Clicktracker
