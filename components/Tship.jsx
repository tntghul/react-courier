import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import stock from "../src/assets/stock.webp";

const Tship = () => {
  gsap.registerPlugin(ScrollTrigger);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
          window.scrollTo(0, 0); // Page open hone par top pe scroll karega
        }, []);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          {/* Left Section - Tracking Form (Coming from Left) */}
          <div ref={leftRef} className="col-lg-6 p-5">
            <h6 className="mt-5 fs-5 display-1">TRACK ORDER</h6>
            <h1 className="mt-3 display-3">
              <b>TRACK YOUR SHIPMENT</b>
            </h1>
            <form>
              <label className="label-control mt-3 display-6 fs-4">
                Enter the Consignment No.
              </label>
              <input
                type="text"
                className="form-control mt-3 mb-3"
                placeholder="Enter tracking number"
              />
              <input type="submit" value="Track Result" className="btn btn-warning w-100" />
            </form>
          </div>

          {/* Right Section - Image (Coming from Right) */}
          <div ref={rightRef} className="col-lg-4 mt-5">
            <img src={stock} className="img-fluid mt-5 mb-5" alt="Tracking" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tship;
