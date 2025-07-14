import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

const Rounting = () => {
    
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}  />
    </Routes>
    
        
    </>
  )
}

export default Rounting