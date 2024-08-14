import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Nav2 from './components/nav2'
import Add1 from './components/add1'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Footer from './components/footer'
import Fixed from './components/fixed'

function App() {

  return (
    <>
    <Fixed></Fixed>
    <Navbar></Navbar>
    <Nav2></Nav2>
    <Add1></Add1>
    <Section1></Section1>
    <Section2></Section2> 
    <Section3></Section3>
    <Section4></Section4>
    <Footer></Footer>
    
    </>
  )
}

export default App
