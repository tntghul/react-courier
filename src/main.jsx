import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Book from '../pages/Book'
import Track from '../pages/Track'
import Contact from '../pages/Contact'


createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element ={< Home/>}/>
        <Route path='/about' element ={< About/>}/>
        <Route path='/book' element ={< Book/>}/>
        <Route path='/track' element ={< Track/>}/>
        <Route path='/contact' element ={< Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </StrictMode>,
)
