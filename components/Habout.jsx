import React, { useEffect, useRef } from "react";
import stock from "../src/assets/stock.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Habout = () => {
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
      <div className="container mb-5 justify-content-center section">
        <div className="row g-0">
          <h1 className="d-flex justify-content-center mt-5 display-3 underline">About Us</h1>
          <div className="col-lg-1"></div>
          
          {/* Left Side (Image) */}
          <div ref={leftRef} className="col-lg-5 mt-5 content">
            <img src={stock} className="img-fluid" alt="About Us" />
          </div>

          {/* Right Side (Text) */}
          <div ref={rightRef} className="col-lg-5 mt-5 content">
            <h2 className="display-5 fs-1">Who are we?</h2>
            <p className="fs-6 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro magni consectetur quo possimus praesentium, 
              dignissimos quas alias aliquam repudiandae quae itaque quibusdam vitae harum deserunt. Assumenda voluptatum nobis neque modi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id animi reprehenderit voluptatum non sint ut mollitia modi officia odit, 
              deleniti earum dignissimos nulla facere voluptatibus dolor sit velit! Asperiores?
            </p>
            <p className="fs-6 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum corrupti quis laboriosam fugiat soluta ipsum accusamus, 
              asperiores reiciendis eos eveniet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habout;
