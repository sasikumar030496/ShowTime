import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../Auth/Auth'
import Bookings from '../Bookings/Bookings'
import HomePage from '../HomePage/HomePage'
import MovieDetail from '../MovieDetail/MovieDetail'

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<Auth/>}/>
            <Route exact path='/' element={<HomePage/>}/>     {/* In earlier versions of React, it used to match partial matches also but now if you give exact = {true} then matches exact path given */}
            <Route path='/bookings' element={<Bookings/>}/>  
            <Route path='/movie/:movieId/details/' element={<MovieDetail/>}/>     
        </Routes>
    </Router>
  )
  
}

export default AppRoutes