import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Library from '../pages/Library'
import NowPlay from '../pages/NowPlay'
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Footer from './Footer';

const AllRouter = () => {
  return (
    <div>
<Routes>
    <Route path="/"       element={<Home/>}/>
    <Route path="/library"  element={<Library/>}/>
    <Route path="/nowplay"  element={<NowPlay/>}/>
        <Route path="/footer"  element={<Footer/>}/>

    <Route path="/signup"  element={<SignUp/>}/>
    <Route path="/login"  element={<Login/>}/>
</Routes>


    </div>
  )
}

export default AllRouter