import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Project from '../Pages/Project'
import Contact from '../Pages/Contact'
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/project' element={<Project/>} />
    </Routes>
  )
}

export default Routing