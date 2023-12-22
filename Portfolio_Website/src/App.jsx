import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
      <div class="vertical-center">
      <h1 className='header'>Chan's Portfolio</h1>

      <div className='nav'> 
        <a className='active' href='#home'>Home</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#resume'>Resume</a>
        <a href='#contact'>Contact</a>
      </div>
      </div> 
      </div>
    </>
  )
}

export default App
