import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Tcondition() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/terms") {
          window.scrollTo(0, 0); // Terms page open hone par top pe scroll karega
        }
      }, [pathname]);
  return (
    <>
      <div className="container my-5">
        <div className="row p-5">
          <div className="col-lg-12">
            <h4>Queriersathi Terms and Conditions</h4>
            <h6>Queriersathi Terms and Conditions for Travelers</h6>
            <br />
            <h6>Welcome to Queriersathi</h6>
            <p>
              These Terms and Conditions govern your use of the Queriersathi website and mobile application and the
              services offered thereon. By registering as a Traveler on the Platform, you agree to be bound by
              these Terms.
            </p>

            <h4>1. Eligibility:</h4>
            <ul>
              <li>You must be at least 18 years old and have the legal capacity to enter into a binding contract to use the platform.</li>
              <li>You must be a resident of India.</li>
            </ul>

            <h4>2. Registration:</h4>
            <ul>
              <li>To become a Traveler on Queriersathi, you must register by creating an account.</li>
              <li>You are responsible for maintaining the accuracy and completeness of your registration information.</li>
              <li>You are solely responsible for all activity that occurs under your account.</li>
            </ul>

            <h4>3. Listing Luggage Space:</h4>
            <ul>
              <li>You can list your available luggage space on the platform, specifying details such as travel route, dates, and luggage size.</li>
              <li>You are responsible for ensuring the accuracy of all information you provide about your luggage space.</li>
              <li>You have the right to accept or reject any delivery requests based on your preferences or concerns.</li>
            </ul>

            <h4>4. Deliveries:</h4>
            <ul>
              <li>Once you accept a delivery request, you agree to transport the designated item safely and securely within the agreed timeframe.</li>
              <li>You are responsible for complying with all applicable laws and regulations regarding the transportation of goods.</li>
            </ul>

            <h4>5. Payments:</h4>
            <ul>
              <li>You will receive payment for accepted deliveries according to the agreed terms with the recipient.</li>
              <li>Queriersathi facilitates secure online transactions and may deduct a service fee from your earnings.</li>
              <li>You are responsible for any taxes or fees associated with your earnings.</li>
            </ul>

            <h4>6. Prohibited Activities:</h4>
            <ul>
              <li>You are prohibited from using the platform to transport:
                <ul>
                  <li>Illegal or hazardous materials</li>
                  <li>Live animals</li>
                  <li>Perishables</li>
                  <li>Items exceeding weight or size limitations</li>
                </ul>
              </li>
              <li>You are prohibited from engaging in any activity that disrupts the integrity or functionality of the platform.</li>
            </ul>

            <h4>7. User Content:</h4>
            <ul>
              <li>You are responsible for any content you post on the platform, including photos, descriptions, and reviews.</li>
              <li>You grant Queriersathi a non-exclusive license to use your content for marketing and promotional purposes.</li>
            </ul>

            <h4>8. Termination:</h4>
            <ul>
              <li>Queriersathi reserves the right to suspend or terminate your account at any time for any reason, with or without notice.</li>
            </ul>

            <h4>9. Limitation of Liability:</h4>
            <ul>
              <li>Queriersathi acts as a facilitator between Travelers and Recipients. We are not liable for any loss, damage, or injury arising from your use of the Platform or your interactions with other users.</li>
              <li>You agree to indemnify and hold harmless Queriersathi from any claims, losses, or liabilities arising from your use of the Platform.</li>
            </ul>

            <h4>10. Governing Law:</h4>
            <ul>
              <li>These Terms shall be governed by and construed in accordance with the laws of India.</li>
            </ul>

            <h4>11. Dispute Resolution:</h4>
            <ul>
              <li>Any dispute arising out of or relating to these Terms shall be settled through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.</li>
            </ul>

            <h4>12. Entire Agreement:</h4>
            <ul>
              <li>These Terms constitute the entire agreement between you and Queriersathi regarding your use of the Platform.</li>
            </ul>

            <h4>13. Updates to Terms:</h4>
            <ul>
              <li>Queriersathi reserves the right to update these Terms at any time. We will notify you of any changes by posting the revised Terms on the Platform.</li>
            </ul>

            <h4>14. Contact Us:</h4>
            <ul>
              <li>If you have any questions about these Terms, please contact us at [Your Email Address].</li>
            </ul>

            <p><strong>By registering as a Traveler on Queriersathi, you acknowledge that you have read and understood these Terms and agree to be bound by them.</strong></p>

            <h6>Queriersathi Terms and Conditions for Senders</h6>
            <br />
            <h6>Welcome to Queriersathi!</h6>
            <p>
              These Terms and Conditions (“Terms”) govern your use of the Queriersathi website (“Website”) and
              mobile application (“App”) (collectively, the “Platform”) and the services offered thereon.
            </p>

            <h4>1. Eligibility:</h4>
            <ul>
              <li>You must be at least 18 years old and have the legal capacity to enter into a binding contract to use the Platform.</li>
              <li>You must be a resident of India.</li>
            </ul>

            <h4>2. Registration:</h4>
            <ul>
              <li>To become a Sender on Queriersathi, you must register by creating an account.</li>
              <li>You are responsible for maintaining the accuracy and completeness of your registration information.</li>
              <li>You are solely responsible for all activity that occurs under your account.</li>
            </ul>

            <h4>3. Posting Delivery Requests:</h4>
            <ul>
              <li>You can post delivery requests on the Platform, specifying details such as item description, pick-up and delivery locations, and preferred delivery timeframe.</li>
              <li>You are responsible for ensuring the accuracy and legality of the information you provide about the item you want to send.</li>
              <li>You are responsible for packaging the item securely to prevent damage during transportation.</li>
            </ul>

            <h4>4. Selecting a Traveler:</h4>
            <ul>
              <li>The Platform will connect you with Travelers who have available luggage space that matches your delivery requirements.</li>
              <li>You have the right to review Traveler profiles and choose the one that best suits your needs.</li>
            </ul>

            <p><strong>By registering as a Sender on Queriersathi, you acknowledge that you have read and understood these Terms and agree to be bound by them.</strong></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tcondition;
