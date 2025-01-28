import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [counterValue, setCountValue] = useState(0)//This will give error as in is byDefault Constant

  let [counterValue, setCountValue] = useState(5)
  // let counterValue = 5

  function addValue(){
    // counterValue=counterValue+1
    setCountValue(counterValue+1)
    console.log("Value Added"+Math.random())
  }

  const decValue = () =>{
    if(counterValue-1>=0)
    {  counterValue = counterValue-1
      setCountValue(counterValue)
    }
  }



  return (
    <>
      <h1>Hii Naman</h1>
      <h2> Counter Value: {counterValue}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
