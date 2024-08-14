import React from 'react'
import './App.css'
import Profile from '../components/Profile'
import Login from '../components/Login'

function App() {
  return (
  <>
  <h1 className="text-2xl font-bold">
      <Profile/>
      <Login/>
    </h1>
  </>
  )
}

export default App
