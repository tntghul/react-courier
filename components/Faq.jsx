import React, { useEffect, useRef } from "react";
import stock from "../src/assets/stock.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Faq = () => {
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
          start: "top 80%", // Animation triggers when the element reaches 80% of the viewport
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
      <div className="container mb-5 section">
        <h1 className="d-flex justify-content-center mt-5 mb-5 display-4">FAQ</h1>
        <div className="row">
          <div ref={leftRef} className="col-lg-7 border p-3 content">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {[
                { id: "One", question: "Short Introduction of Quriersathi", answer: "Placeholder content for introduction." },
                { id: "Two", question: "What if My Parcel Is Lost?", answer: "Content explaining what happens if a parcel is lost." },
                { id: "Three", question: "Is Queriersathi Safe and Secure?", answer: "Details about security measures." },
                { id: "Four", question: "Is Queriersathi Cost-Effective?", answer: "Explanation of cost benefits." },
                { id: "Five", question: "How can I Contact Quriersathi for Support?", answer: "Support contact details." },
                { id: "Six", question: "How does it work?", answer: "Explanation of how the service works." },
              ].map(({ id, question, answer }) => (
                <div key={id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
                      {question}
                    </button>
                  </h2>
                  <div id={`flush-collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={rightRef} className="col-lg-5 content">
            <img src={stock} className="img-fluid" alt="FAQ" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
