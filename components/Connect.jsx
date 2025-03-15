import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Connect = () => {
  gsap.registerPlugin(ScrollTrigger);

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      topRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: topRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      bottomRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 90%",
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

          {/* Left Section - Contact Details (Coming from Top) */}
          <div ref={topRef} className="col-lg-5 mt-5">
            <h3 className="mb-5 display-5 text-warning">
              Get in Touch And We'll Connect You Shortly
            </h3>

            <div className="d-flex border bgwar rounded p-4">
              <i className="bi bi-phone text-warning display-4"></i>
              <p className="p-3 display-5 fs-4">
                <strong>Call Us 24/7:</strong> 7569856321
              </p>
            </div>

            <div className="d-flex border bgwar rounded p-4 mt-4">
              <i className="bi bi-whatsapp icon-hover text-warning display-4"></i>
              <p className="p-3 display-5 fs-4">
                <strong>WhatsApp Help:</strong> 7569856321
              </p>
            </div>

            <div className="d-flex border bgwar rounded p-4 mt-4 mb-5">
              <i className="bi bi-envelope-at text-warning display-4"></i>
              <p className="p-3 display-5 fs-4">
                <strong>Support:</strong> info@queriersathi.com
              </p>
            </div>
          </div>

          {/* Right Section - Feedback Form (Coming from Bottom) */}
          <div ref={bottomRef} className="col-lg-5 mb-5">
            <h3 className="mb-5 display-5 text-warning mt-5">
              Feel Free to Write Your Valuable Feedback
            </h3>
            <form>
              <label className="form-label mt-3">Name</label>
              <input type="text" className="form-control mb-3" placeholder="Your name" />

              <label className="form-label">Email</label>
              <input type="email" className="form-control mb-3" placeholder="@gmail.com" />

              <label className="form-label">Phone No.</label>
              <input type="text" className="form-control mb-3" placeholder="75*******4" />

              <label className="form-label">Your Feedback</label>
              <textarea className="form-control" placeholder="Write your message here..."></textarea>

              <input type="submit" value="SUBMIT" className="btn btn-warning mt-4 w-100" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
