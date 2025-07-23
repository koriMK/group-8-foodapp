import { useState } from 'react'
import Checkout from './pages/Checkout'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='text'>
        <h1 style={{color:'black'}}>FOOD APP CHECKOUT</h1>
      </div>

      <div className='checkout'>
        <Checkout />
      </div>
    </>
  )
}

export default App
