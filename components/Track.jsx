import React, { useState, useEffect } from "react";

const Track = () => {
  const stats = {
    deliveries: 530,
    customers: 554,
    agencies: 56,
  };

  // Hook to animate count
  const useAnimatedCount = (targetValue, duration) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const increment = Math.ceil(targetValue / (duration / 50));
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          const nextValue = prevValue + increment;
          if (nextValue >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return nextValue;
        });
      }, 50);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [targetValue, duration]);

    return currentValue;
  };

  // Animate each statistic
  const deliveries = useAnimatedCount(stats.deliveries, 2000);
  const customers = useAnimatedCount(stats.customers, 2000);
  const agencies = useAnimatedCount(stats.agencies, 2000);

  return (
    <div className="container text-center my-5">
        <h3 className="display-6">One Of India's Leading peer-to-peer product delivery company</h3>
      <div className="row mt-5">
        <div className="col">
          <div className="stat" style={{ fontSize: "3rem", fontWeight: "bold", color: "#73bce5" }}>
            {deliveries}+
          </div>
          <div className="label display-4">
            <p className="fs-4"> Successfully Deliveries</p> 
          </div>
        </div>
        <div className="col">
          <div className="stat" style={{ fontSize: "3rem", fontWeight: "bold", color: "#73bce5" }}>
            {customers}+
          </div>
          <div className="label display-4">
            <p className="fs-4">Happy Customers</p>
          </div>
        </div>
        <div className="col">
          <div className="stat" style={{ fontSize: "3rem", fontWeight: "bold", color: "#73bce5" }}>
            {agencies}
          </div>
          <div className="label display-4" >
            <p className="fs-4">Our Registered Travelers & Agencies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
