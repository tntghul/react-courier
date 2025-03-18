import React, { useEffect } from 'react'

const Shipping = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Page open hone par top pe scroll karega
      }, []);
  return (
    <>
    <div className="container my-5">
        <div className="row p-5">
            <div className="col-lg-10">
                <h3>QUERIERsathi : Shipping and Delivery Policy </h3>
                <h4>Introduction</h4>
                <p>This policy outlines the shipping and delivery process for QUERIERsathi, connecting Travelers with unused luggage spacec to Senders who need items delivered.</p>
            
                <h4>Delivery Process :</h4>
                <h4>1. Sender Posts Delivery Request :</h4>
                <ul>
                    <li>Sender specify item details , pickup and delivery locations, and preferred delivery timeframe.</li>
                    <li>Senders declare the value of their item for insurance purposes.</li>
                </ul>

                <h4>2. QUERIERsathi Finds a Travler :</h4>
                <ul><li>Queriersathi matches the delivery request with a Travler traveling alonng a suitable route with sufficient luggage route with sufficient luggage space.</li></ul>
            
            <h4>Traveler Accepts Delivery</h4>
            <ul>
                <li> Travelers review delivery details and choose to accept or decline requests based on their preferences and capacity.</li>
                <li>○ Once a Traveler accepts, both parties receive confirmation and can track the delivery progress in real-time through the app.</li>
            </ul>

            <h4>4. Pick-Up and Delivery:</h4>
            <ul>
                <li> The sender will keep their item in packageable condition and now quriersathi will verify and pick up this delivery from sender and securely packs the item and hands it over to the Traveler at the designated pick-up location and time.</li>
                <li> Travelers safely transport the item and deliver it to the recipient at the designated address within the agreed timeframe.</li>
            </ul>

            <h4>Sender Responsibilities</h4>
            <ul>
                <li> Ensure the item is properly packaged to withstand travel.</li>
                <li> Clearly label the package with recipient information and the Quriersathi reference code.</li>
                <li> Be available for pick-up at the designated location and time.</li>
                <li> Declare the accurate value of the item for insurance purposes.</li>
            </ul>

            <h4>Travelers Responsibilities</h4>
            <ul>
                <li> Carefully handle and transport the package during travel.</li>
                <li> Deliver the package to the recipient at the designated address within the agreed timeframe.</li>
                <li> Notify Quriersathi promptly of any delays or unforeseen circumstances</li>
            </ul>

            <h4>Delivery Timeframe</h4>
            <ul>
                <li> Delivery timeframes are estimates based on travel distances and are visible during the booking process.</li>
                <li> Real-time tracking allows Senders and Travelers to monitor delivery progress.</li>
            </ul>

            <h4><b>Lost or Damaged Goods</b></h4>
            <ul>
                <li> QUERIERsathi acknowledges its responsibility for Sender’s loss in case of lost or damaged goods.</li>
                <li> In such cases, Senders will receive a full refund for the declared value of the item (up to the pre-defined limit outlined in our terms and conditions) within 48 hours of filing a proper claim.</li>
                <li> See our Refund and Cancellation Policy for details on the claim process.</li>
            </ul>

            <h4>Prohibited Items</h4>
            <ul>
                <li> Sending illegal, hazardous, or perishable items is strictly prohibited.</li>
                <li> See our Terms and Conditions for a complete list of prohibited items.</li>
            </ul>
            </div>
        </div>
    </div>

    </>
  )
}

export default Shipping