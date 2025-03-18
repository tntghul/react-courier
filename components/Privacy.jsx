import React, { useEffect } from 'react'

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Page open hone par top pe scroll karega
      }, []);
  return (
    <>
    <div className="container my-5">
        <div className="row p-5">
            <div className="col-lg-12">
                <h3>QUERIERsathi Privacy Policy</h3>
                <h4>Welcome to QUERIERsathi</h4>
                <p>This Privacy Policy outlines how QUERIERsathi collects, uses and discloses information from users of our website and mobile application in connection with our services.</p>
            
            <h3>1. Information We Collect:</h3>
            <h4>From Travelers:</h4>
            <ul>
                <li>Registration information : Name, Email, Address, Phone number, Identification documents.</li>
                <li>Travelers details : Itinerary, origin , and destination ,luggage space availability.</li>
                <li>User-generated content : Profile picture ,reviews and any other information you post on the platform.</li>
                <li>Device information : Device type , operating system and IP addrees.</li>
            </ul>
            <h4>From Senders :</h4>
            <ul>
                <li>Registration information : Name, Email, Address, Phone number.</li>
                <li>Delivery details : Item description, pickup and delivery.</li>
                <li>User-generated content : Reviews and any other information you post on the platform.</li>
                <li>Device information : Device type , operating system and IP addrees.</li>
            </ul>

            <h3>2. How We Use Your Information :</h3>
            <ul>
                <li>We use your information to :</li>
                <ul>
                    <li>Facilitate communication between Travelers and Senders for deliveries.</li>
                    <li>Verify user identities and ensure platform security.</li>
                    <li>Process payments and transactions securely.</li>
                    <li>Provide customer support and respond to inquiries.</li>
                    <li>Improve the Platform's functionality and user experience.</li>
                    <li>Send you promotional communiications.</li>
                </ul>
            </ul>
            <h3>3.Information Sharing</h3>
            <ul>
                <li>We may share your information with third-party service providers who assist us in operating the platform, such as payment processors and background check companies.</li>
                <li>We may disclose your information if required by law or in the good faith belief that such action is necessary to comply with legal requirements or protect the rights and safety of QUERIERsathi or others.</li>
                <li>We will never share yoyr personal information with third-party advertisements without your explicit consent.</li>
            </ul>
            
            <h3>4.Data Security :</h3>
            <ul>
                <li>We take reasonable steps to protect your information from unauthorized access ,discloser ,alteration or destruction.</li>
                <li>However no internet , transmission or electronic storage method is completely secure. Therefore , we cannot gurantee absolute security.</li>
            </ul>
            <h3>5. Your Choices :</h3>
            <ul>
                <li>You can access ,update or delete your information through your account settings.</li>
                <li>You can opt out of receiveing promotional communications from us by following the unsubscribe instruction in such communications.</li>
                <li>You can control your location data sharing preferences through your device settings.</li>
            </ul>

            <h3>6.Children's Privacy</h3>
            <ul>
                <li>Our Platform is not intended for children under the age of 18. We do not knowingly collect personal information from children.</li>
            </ul>

            <h3>7.International Transfer :</h3>
            <ul><li>Your information may be transferred to and pricessed in countries other than your own , which may have different data protection laws.</li></ul>
            
            <h3>8. Changes to the Policy :</h3>
            <ul><li>We may update this policy from time to time. We will notify you any changes by posting the revised Policy on the platform.</li></ul>
            
            <h3>9. Contact Us :</h3>
            <ul><li>If you have any questions about this policy , please contact us at [Your email address]. By using QUERIERsathi platform, you agree to be bound by this privacy policy. </li></ul>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Privacy