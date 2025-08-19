"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./policy.css";

export default function PrivacyPolicy() {
 const [showModal , setShowModal] = useState(false);

 const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/privacy.pdf";
    link.download = "/privacy.pdf";
    link.click();
 };

  return (
    <>
    
      
   


    <div className="policy-container">

    <div className="d-flex float-end gap-2 mt-4">
        <button variant="primary" className="btn btn-primary" onClick={handleDownload}>Download PDF</button>

       <button variant="secondary"  className="btn btn-primary" onClick={()=>setShowModal(true)}> View in Modal</button>
       </div>

      <header className="policy-header">
        <h1 className="uppercase">OceanTechZone  Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> 18th August 2025 &nbsp;|&nbsp;
          <strong> Last Updated:</strong> 18th August 2025
        </p>
        <p>
          This Privacy Policy sets out the terms of collection, use, storage, and
          disclosure of information (including personal information) by
          OceanTechZone ("we," "our," "us"). It applies whenever you interact with
          OceanTechZone, including when you:
        </p>
        <ul>
          <li>Visit our website (the “Site”)</li>
          <li>
            Purchase or use our Bulk SMS, WhatsApp, voice, or digital
            communication services (the “Services”)
          </li>
          <li>Communicate with our sales, billing, or support teams</li>
        </ul>
        <p>
          By accessing or using our Site or Services, you agree to this Privacy
          Policy.
        </p>
      </header>

      <main className="policy-content">
        <section>
          <h2 className="uppercase">1. Information We Collect</h2>

          <h3>1.1 Personal Information</h3>
          <p>
            Information you voluntarily provide during registration, enquiry, or
            service activation, including:
          </p>
          <ul>
            <li>Name, company name, date of birth, gender</li>
            <li>Email address, phone number, postal address, zip, country</li>
            <li>Payment & billing details</li>
            <li>Login credentials (if applicable)</li>
          </ul>

          <h3>1.2 Mobile User Information</h3>
          <p>
            As part of Bulk SMS and messaging services, we may receive:
          </p>
          <ul>
            <li>End-user mobile numbers</li>
            <li>Message content (provided by clients)</li>
            <li>Geographic location (if shared by client or carrier)</li>
            <li>PINs, DLT headers, or opt-in records</li>
          </ul>
          <p>
            OceanTechZone does not create or control message content. Clients are
            solely responsible for obtaining necessary opt-ins/consents before
            sending messages.
          </p>

          <h3>1.3 Website & Technical Information</h3>
          <p>When you visit our Site, we may automatically collect:</p>
          <ul>
            <li>IP address, browser type, operating system, device details</li>
            <li>Site navigation, referral source, timestamps</li>
            <li>Non-identifiable analytics data for performance improvements</li>
          </ul>

          <h3>1.4 Additional Information</h3>
          <p>
            You may provide additional information while availing Services. Such
            data may be used for:
          </p>
          <ul>
            <li>Service optimization</li>
            <li>Usage analysis</li>
            <li>Troubleshooting and performance improvements</li>
          </ul>
        </section>

        <section>
          <h2 className="uppercase">2. How We Use the Information</h2>
          <ul>
            <li>Deliver and maintain our Bulk SMS, WhatsApp, and voice services</li>
            <li>Ensure regulatory compliance with TRAI, DoT, DLT, and data protection laws</li>
            <li>Communicate with you about billing, account updates, promotions, and support</li>
            <li>Personalize recommendations and improve services</li>
            <li>Detect and prevent fraud, abuse, or unauthorized access</li>
            <li>Conduct internal audits, testing, and troubleshooting</li>
          </ul>
          <p>
            We may also use your personal information for advertising and
            marketing purposes, unless you opt out.
          </p>
        </section>

        <section>
          <h2 className="uppercase">3. Cookies & Tracking Technologies</h2>
          <ul>
            <li>
              <strong>Cookies:</strong> We use session and persistent cookies to
              remember preferences, analyze site traffic, and improve user
              experience.
            </li>
            <li>
              <strong>Clear GIFs/Web Beacons:</strong> Used for campaign
              tracking, analytics, and service enhancements.
            </li>
            <li>
              <strong>Your Choice:</strong> You may disable cookies in your
              browser, but some Site features may not work properly.
            </li>
          </ul>
          <p>
            For more details, visit{" "}
            <a href="https://www.allaboutcookies.org" target="_blank">
              www.allaboutcookies.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="uppercase">4. Sharing of Information</h2>
          <p>
            We will not share your Personal Information with third parties except
            in the following cases:
          </p>
          <ol>
            <li>
              <strong>Group Entities:</strong> With subsidiaries, affiliates, or
              partners, who are bound by this Privacy Policy.
            </li>
            <li>
              <strong>Service Providers:</strong> With trusted vendors (e.g.,
              telecom operators, payment processors, hosting providers) who help
              deliver our services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law,
              regulation, court order, or government authority.
            </li>
            <li>
              <strong>Business Transactions:</strong> If OceanTechZone merges,
              transfers, or sells assets, your data may be shared with the
              acquiring entity.
            </li>
            <li>
              <strong>Marketing & Communication:</strong> With affiliates or
              partners for marketing purposes, unless you opt out.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="uppercase">5. Data Security</h2>
          <p>We employ strict technical, physical, and organizational safeguards, including:</p>
          <ul>
            <li>Encrypted data transmission (SSL/TLS)</li>
            <li>Secure servers with restricted access</li>
            <li>Regular compliance audits</li>
          </ul>
          <p>
            However, internet transmissions are not 100% secure. We cannot
            guarantee absolute security against unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="uppercase">6. Your Rights & Choices</h2>
          <ul>
            <li><strong>Opt-Out:</strong> You may unsubscribe from promotional communications at any time.</li>
            <li><strong>Opt-In:</strong> By registering, you consent to receiving notifications, updates, and promotional content via SMS, WhatsApp, or email.</li>
            <li><strong>Data Access & Correction:</strong> You may request access to, correction of, or deletion of your personal data (subject to regulatory retention requirements).</li>
            <li><strong>Withdrawal of Consent:</strong> You may withdraw consent anytime, but certain services may require specific data to function.</li>
          </ul>
        </section>

        <section>
          <h2 className="uppercase">7. Data Retention</h2>
          <ul>
            <li>Customer & end-user data is retained only as long as required for service delivery or legal compliance.</li>
            <li>DLT records, TRAI-mandated logs, and transactional records are stored as per government regulations.</li>
            <li>Once retention periods expire, data is securely deleted or anonymized.</li>
          </ul>
        </section>

        <section>
          <h2 className="uppercase">8. International Data Transfers</h2>
          <p>
            Your information may be transferred and stored on servers outside
            your country, including within OceanTechZone group entities worldwide.
            By using our services, you consent to such transfers in accordance
            with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="uppercase">9. Business Continuity & Transfer of Information</h2>
          <p>
            If OceanTechZone undergoes a merger, acquisition, or asset sale,
            customer data (including Personal Information) may be transferred to
            the new entity. You will be notified in such cases.
          </p>
        </section>

        <section>
          <h2 className="uppercase">10. Changes to this Privacy Policy</h2>
          <p>This Privacy Policy may be updated from time to time due to:</p>
          <ul>
            <li>Legal or regulatory changes (TRAI, DPDP Act 2023, GDPR)</li>
            <li>Service enhancements</li>
            <li>Business restructuring</li>
          </ul>
          <p>
            We encourage you to review this page regularly. Updates will carry a
            revised “Last Updated” date.
          </p>
        </section>

        <section>
          <h2 className="uppercase">11. Governing Law</h2>
          <p>
            This Privacy Policy shall be governed by the laws of India. Disputes
            shall fall under the exclusive jurisdiction of courts in New Delhi,
            India.
          </p>
        </section>

        <section>
          <h2 className="uppercase">12. Contact Us</h2>
          <p>
            For questions, concerns, or complaints regarding this Privacy Policy,
            contact us at:
          </p>
          <p>
            OceanTechZone <br />
            Email: <a href="mailto:enquiry@oceantechzone.com">enquiry@oceantechzone.com</a> <br />
            Phone: [Insert Company Support Number] <br />
            Address: [Insert Registered Office Address]
          </p>
        </section>
      </main>
    </div>
  

       <Modal show={showModal} onHide={()=> setShowModal(false)} size="lg" centered  >
        <Modal.Header closeButton>
            <Modal.Title>
                Term & Conditions 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"70vh"}}  >
            <iframe
            src="/privacy.pdf"
            width = "100%"
            height="100%"
            style={{border : "none"}}
            ></iframe>

        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn btn-primary" onClick={()=> setShowModal(false)}>
                close
            </Button>

            <Button variant="primary" className="btn btn-primary" onClick={handleDownload}>
                Download PDF
            </Button>
          </Modal.Footer>

        </Modal> 
       
     
    
    </>
  );
}
