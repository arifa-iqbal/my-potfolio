import React from 'react'
import NavBar from './Components/NavBar/Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Hero from "../src/Components/Hero/Hero"




const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />

      </Routes>

    </>
  )
}

export default App

