import { useState } from 'react'
import './App.css'
import Home from './home/home'
import Studentlog from './form/studentlogin'
import Teacherlog from './form/teacherlogin'
import Teachersignup from './form/teachersignup'
import {Routes,Route} from 'react-router-dom'
import Techerspage from  './component/teachercomponent/techerspage'
import Studentpage from './component/studentcomponent/studentpage'


function App() {

  return (
    <>
      <div className='appcontainer'>
        
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/studentlogin' element={<Studentlog/>}/>
          <Route path='/teacherlogin' element={<Teacherlog/>}/>
          <Route path='/teachersignup' element={<Teachersignup/>}/>
          <Route path='/teacherpage' element={<Techerspage/>}/>
          <Route path='/studentpage' element={<Studentpage/>}/>


        </Routes>
      </div>
      
        
        
    </>
  )
}

export default App
