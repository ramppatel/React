import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      {/* <h1 className='bg-orange-500'>Hello My Friends !!!</h1>
      <h2 className='bg-green-500'>Are You Excited For Learning Redux-Toolkit ?</h2> */}
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
