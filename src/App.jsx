import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
    <Register/>
    <Login/>

    <Router/>
    <ToastContainer
    position="top-right"
    autoClose={100}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      
    </>
  )
}

export default App
