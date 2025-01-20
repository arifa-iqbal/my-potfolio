import React from 'react'
import NavBar from './Components/NavBar/Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Hero from "../src/Components/Hero/Hero"
import About from "../src/Components/About/About"





const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </>
  )
}

export default App

