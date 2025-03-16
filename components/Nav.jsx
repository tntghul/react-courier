import React from 'react'
import courier from '../src/assets/courier.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <Link className="navbar-brand ps-5" to="/"><img src={courier} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav pe-5 ">
        <li className="nav-item">
          <Link className="nav-link" to="/"><b>HOME</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><b>ABOUT</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/book"><b>BOOK SHIPMENT</b></Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/track"><b>TRACK SHIPMENT</b></Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/contact"><b>CONTACT US</b></Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
<hr className='border-warning border-3' />
    </>
  )
}

export default Nav
