import {React, useState, useEffect} from 'react'
import './App.css'

// components
import Navbar from './Components/Navbar/Navbar'
import Entery from './Components/Entery/Entery'
import About from './Components/About/About'
import Pagination from './Components/Pagination/Main'
import Blog from './Components/Blog/Blog'

const App = () => {
  return (
    <>
      <Navbar/>
      <Entery/>
      <About/>
      <Pagination/>
      <Blog/>
    </>
  )
}

export default App