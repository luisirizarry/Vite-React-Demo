import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items from './Items'
import ShoppingCart from './ShoppingCart'
import Alert from './Alert'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart items={Items}/>
      <Alert variant="success">
        <h1>Welcome Back!</h1>
      </Alert>
    </>
  )
}

export default App
