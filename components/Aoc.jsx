import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aoc from "../src/assets/aoc.png";

const Aoc = () => {
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
          <div ref={leftRef} className="col-lg-6">
            <h2 className="display-4 mt-4 mb-5">About Our Company</h2>
            <p className="display-4 fs-5">
              QUERIERsathi PVT LTD is a groundbreaking peer-to-peer product delivery startup 
              revolutionizing the traditional courier and delivery industry. The company aims 
              to leverage our registered buses running daily between Delhi, Noida, Gurugram, 
              Jaipur, Agra, and provide faster, cost-effective, and eco-friendly delivery solutions.
            </p>
            <p className="display-4 fs-5">
              Peer-to-peer delivery service for parcel and document sending. The platform connects 
              senders directly with verified travelers to deliver parcels and documents. It also 
              provides door-to-door pickup and delivery services. The website allows users to book 
              directly, track shipments, and list travelers based on travel dates.
            </p>
            <p className="display-4 fs-5">
              Users can easily book, track their shipments, and travelers can list their services 
              based on travel schedules, ensuring seamless deliveries.
            </p>
          </div>

          {/* Right Section - Image */}
          <div ref={rightRef} className="col-lg-4">
            <img src={aoc} className="img-fluid mt-5 mb-5" alt="About Our Company" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aoc;
