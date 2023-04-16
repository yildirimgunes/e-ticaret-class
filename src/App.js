import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Footer from './components/footer/Footer'
//import Header from './components/header/Header'
import {Header, Footer} from "./components"
//import Contact from './pages/contact/Contact'
//import Home from './pages/home/Home'
import {Contact, Home, Login, Register, Reset} from "./pages"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/reset" element={<Reset/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App

