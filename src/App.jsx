import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pagination } from './Components/Pagination'
import { ProductList } from './Components/ProductList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>FakeStore</h1>

    
     <ProductList/>
    </>
  )
}

export default App
