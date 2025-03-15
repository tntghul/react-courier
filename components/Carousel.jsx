import React from 'react'
import c1 from '../src/assets/c1.jpeg'
import c2 from '../src/assets/c2.jpeg'
import c3 from '../src/assets/c3.jpeg'
import c4 from '../src/assets/c4.jpeg'
import c5 from '../src/assets/c5.jpeg'



const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
  )
}

export default Carousel
