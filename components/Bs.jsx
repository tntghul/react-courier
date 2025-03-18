import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MultiStepForm = () => {
  gsap.registerPlugin(ScrollTrigger);

  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
          window.scrollTo(0, 0); // Page open hone par top pe scroll karega
        }, []);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div ref={formRef} className="col-lg-8 border my-4 p-5 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center text-warning mb-4"></h3>

          {currentStep === 1 && (
            <div>
              <h4>Step 1: Package Information</h4>
              <label className="form-label">Origin Pincode</label>
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                            <label lassName="form-label">Destination Pincode</label>    
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                            
                            <label className="form-label">Select Package Contents</label>
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                            
                            <label lassName="form-label">Describe Your Package</label>    
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                            
                            <label className="form-label">Select Package Size</label>
                            <input type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                            <button type="text" className=" btn mt-3 btn-success"> Calculater</button>
                            <input type="submit" value="NEXT" className="btn btn-warning form-control mt-3"  onClick={handleNext} />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h4>Step 2: Contact Information</h4>
              <label htmlFor="email" className="form-label">
                                Shipment Value
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="" className="form-label"> Product Content </label>
                            <input type="text" className="form-control" />

                            <label htmlFor="" className="form-label"> Product Images</label>
                            <input type="file" className="form-control" />

                            <label htmlFor="" className="form-label"> Mobile Number</label>
                            <input type="text" className="form-control" />

                            <label htmlFor="" className="form-label"> Full Name</label>
                            <input type="text" className="form-control"/>

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" />
                            <button
                            type="button"
                            className=" my-3 form-control btn btn-warning"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="form-control btn btn-warning"
                            onClick={handleNext}
                        >
                            Next
                        </button>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h4>Step 3: Account Information</h4>
              <label className="form-label">Amount to Pay</label>
              <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
              <button type="button" className="btn btn-secondary w-100 mt-3" onClick={handleBack}>Back</button>
              <button type="submit" className="btn btn-warning w-100 mt-3">Submit</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
