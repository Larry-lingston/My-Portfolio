import { useState } from 'react'
import Navbar from "./component/NavBar/navbar"
import Banner from "./component/Banner/banner"
import Home from "./component/Home/home"
import AboutMe from "./component/AboutMe/aboutme"
import Portfolio from "./component/Portfolio/portfolio"
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default App
