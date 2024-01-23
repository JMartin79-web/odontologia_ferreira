import { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home';



function App() {

  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>

          {/* HOME */}
          <Route path='/' element={<Home/>} />
        
        </Routes>  

        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
