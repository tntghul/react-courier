import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Unique = () => {
  gsap.registerPlugin(ScrollTrigger);

  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !middleRef.current || !rightRef.current) {
      console.error("Error: One or more refs are not assigned.");
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
      middleRef.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: middleRef.current,
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
      <div className="container mt-5 mb-5">
        <div className="row">
          <h2 className="d-flex justify-content-center display-4 mb-5 mt-5">Our Unique Value Proposition</h2>
          
          {/* Left Section */}
          <div ref={leftRef} className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-clock-history display-1"></i>
            <p className="display-6 fs-5 mt-5">
              Sender/Recipients enjoy quicker and more cost-effective delivery services.
            </p>
          </div>

          {/* Middle Section */}
          <div ref={middleRef} className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-currency-dollar display-1"></i>
            <p className="display-6 fs-5 mt-5">
              Travel Agencies can earn by utilizing their unused/extra luggage space effectively.
            </p>
          </div>

          {/* Right Section */}
          <div ref={rightRef} className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-cloud-download display-1"></i>
            <p className="display-6 fs-5 mt-5">
              The environment experiences a decrease in delivery emissions, contributing to sustainability efforts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;
