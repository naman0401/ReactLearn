import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Naman",
    Age:25
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card welcome="Hello " btntxt="Signup" someObj = {myObj}/>
      <Card welcome="Hii " someObj = {myObj}/>
      {/* <Card/> */}
    </>
  )
}

export default App
