import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Trending from './Trending'
import Popular from './Popular'

const Rounting = () => {
    
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/trending' element={<Trending />}  />
        <Route path='/popular' element={<Popular />}  />
    </Routes>
    
        
    </>
  )
}

export default Rounting