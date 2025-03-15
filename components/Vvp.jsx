import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aoc1 from "../src/assets/aoc1.png";

const Vvp = () => {
  gsap.registerPlugin(ScrollTrigger);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) {
      console.error("Error: One or both refs are not assigned.");
      return;
    }

    gsap.fromTo(
      leftRef.current,
      { x: -200, opacity: 0 },
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
      { x: 200, opacity: 0 },
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
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>

          {/* Left Section - Text */}
          <div ref={leftRef} className="col-lg-6 mt-5">
            <h2 className="display-4 mt-5">Vision And Value Proposition</h2>
            <p className="display-4 fs-5 mt-5">
              Our vision is to redefine logistics by fostering a community-driven ecosystem that 
              optimizes travelers' routes for efficient, same-day deliveries.
            </p>
            <p className="display-4 fs-5">
              <strong>Affordability:</strong> Cost-effective solutions compared to traditional courier services.
            </p>
            <p className="display-4 fs-5">
              <strong>Speed and Efficiency:</strong> Swift delivery facilitated by utilizing travelers' routes 
              for faster transportation.
            </p>
            <p className="display-4 fs-5">
              <strong>Security and Reliability:</strong> Trustworthy handling of packages ensured by reliable 
              travelers and sender-verified profiles.
            </p>
          </div>

          {/* Right Section - Image */}
          <div ref={rightRef} className="col-lg-4 mt-5">
            <img src={aoc1} className="img-fluid mt-5 mb-5" alt="Vision and Value Proposition" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vvp;
