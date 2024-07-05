import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Logout from './logout'

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </>
  )
}

export default Rout