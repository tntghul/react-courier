import React, { useState } from "react";

const Bs = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

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
        <div className="container mt-5 d-flex align-item-center justify-content-center">
            <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {currentStep === 1 && (
                    <div>
                        
                        <h3 className="text-center">Step 1: Package Information</h3>
                        <div className=" col-lg-12 border p-5 rounded m-5">
                       
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
                    </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                    <div>
                        <h3 className="text-center">Step 2: Contact Information</h3>
                        <div className="m-3  col-lg-12 border p-5 rounded">
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
                       
                    </div>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                    <div>
                        <h3 className="text-center">Step 3: Account Information</h3>
                        <div className="m-3 col-lg-12 border p-5 rounded">
                            <label htmlFor="password" className="form-label">
                                Amount to pay
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

<button
                            type="button"
                            className="btn btn-warning form-control my-3"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button type="submit" className="btn btn-warning form-control">
                            Submit
                        </button>
                        </div>
                        
                    </div>
                )}
            </form>
            </div>
        </div>
        
    );
};

export default Bs;
