import React from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   const user ='hari'

  return (
    <div>
      {
        user ?
        <Dashboard />
        :
        <Login />
      }
    </div>
  )
}

export default App