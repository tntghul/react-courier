import React, { useEffect } from 'react'

const Refund = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Page open hone par top pe scroll karega
      }, []);
return (
<>
    <div className="container my-5">
        <div className="row p-5">
            <div className="col-lg-12">
                <h3>Quriersathi: Refund and Cancellation Policy</h3>
                <br />
                <h4>Introduction:</h4>
                <ul>
                <li>This policy outlines the guidelines for refunds and cancellations on the Quriersathi platform for
                    both Travelers and Senders.</li></ul>
<br />
                <h4>For Travelers:</h4>
                <h4>Cancellations:</h4>
            <ul><li>Travelers have the right to cancel a delivery request before it has
                    been accepted by a Sender.</li>
                <li> In such cases, no cancellation fee will be applied.</li></ul>
    <br />
                <h4>Refunds:</h4>
                <ul><li>Travelers will not be eligible for a refund if they:</li>
                <li> Cancel a delivery request after it has been accepted by a Sender.
                    Fail to fulfill their delivery obligations without a valid reason (e.g., damaged luggage exceeding
                    weight limits).</li></ul>
                        <br />
                <h4>For Senders:</h4>
                <h4>Cancellations:</h4>
                <br />
                <ul><li> Senders can cancel a delivery request before a Traveler has accepted
                    it.</li>
                    <li>A full refund will be issued to the Sender in this case.</li>

                <li><strong>Once a Traveler accepts a delivery request, cancellations by the Sender are subject to the
                        following:*</strong></li>

                <li><strong>***Before Pick-up:** Senders can cancel before the pick-up
                        windowwith a **cancellation fee**(outlined in our terms and conditions).&nbsp;</strong></li>
                <li><strong>* **After Pick-up:** Cancellations after pick-up will **not** be refunded. However,
                        Quiersathi will make all reasonable efforts to locate an alternative Traveler to complete the
                        delivery. If successful, the&nbsp;original delivery fee will be charged. If unsuccessful, the
                        Sender will receive a **partial refund**(excludingthe cancellation fee and any incurred
                        costs).</strong></li></ul>

                <h4>Lost or Damaged Goods:</h4>
                <li> Quiersathi acknowledges its responsibility for Sender’s loss in case of
                    lost or damaged goods.</li>
                <br />
                <h4>Claim Process:</h4>
                <li> To initiate a refund for lost or damaged goods, Senders must report the
                    issue through the Quiersathi app within a specified timeframe (outlined in 
                    our terms and conditions) and provide all necessary documentation (photos, police report
                    if applicable).</li>
                    <li> Quiersathi will investigate the claim and process the refund within 48 hours of a
                    successful claim.</li>
            </div>
        </div>
    </div>

</>
)
}

export default Refund