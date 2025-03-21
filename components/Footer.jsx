import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='bg-black text-white'>
      <div className="container">
        <div className="row">
            <div className="col-lg-3 mt-4 text-center">
                <h5>About Us</h5>
                <p className='display-6 fs-6 mt-2 text-secondary'>QUERIERsathi PVT LTD is a groundbreaking peer to-peer product delivery startup revolutionizing the traditional courier and delivery industry. the company aims to leverageour registered buses running daily between Delhi, Noida, Gurugram, Jaipur, Agra, and Provide faster, cost-effective and eco-friendly delivery solutins.</p>
            </div>
            <div className="col-lg-3 mt-4 text-center">
                <h5>Quick Links</h5>
                <ul className="list-unstyled display-6 fs-6 ">
                    <Link className='text-decoration-none' to="/privacy"><li className='mt-3 text-secondary' > Privacy Policy</li></Link>
                    <Link className='text-decoration-none' to="/terms"><li className='mt-2 text-secondary'>Terms and Condition</li></Link>
                    <Link className='text-decoration-none' to="/refund"><li className='mt-2 text-secondary'>Refund and Returns</li></Link>
                    <Link className='text-decoration-none' to="/shipping"><li className='mt-2 text-secondary'>Shipping and Delivery</li></Link>
                </ul>
            </div>
            <div className="col-lg-3 mt-4 text-center">
                <h5>Ship With Us</h5>
                <ul className="list-unstyled display-6 fs-6">
                    <Link className='text-decoration-none' to="/book"><li className='mt-3 text-secondary'>Book a Shipment</li></Link>
                    <Link className='text-decoration-none' to="/track"><li className='mt-2 text-secondary'>Track a Shipment</li></Link>
                </ul>
            </div>
            <div className="col-lg-3 mt-4 text-center">
                <h5>Self Services Portal</h5>
            </div>
        </div>
      </div>
      
      <div className='pt-2 bg-warning d-flex justify-content-center'>
            <p className='text-dark'><b>Copyright 2025 QUERIERsathi</b></p>
      </div>
      </footer>
    </>
  )
}

export default Footer
