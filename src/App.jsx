import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items from './Items'
import ShoppingCart from './ShoppingCart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart items={Items}/>
    </>
  )
}

export default App
