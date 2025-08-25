"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./terms.css";

export default function TermsAndConditions() {
const [showModal,setShowModal ] = useState(false)

const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/terms.pdf";
    link.download = "/terms.pdf";
    link.click();
}



  return (
    <>
   <div>
  
    
    <div className="terms-page">
      <div className="container terms-container">
        <header className="terms-header">
    <div className="d-flex mt-4 gap-3 float-end">
      <button variant="primary" className="btn btn-primary" onClick={handleDownload}>Download PDF</button>
      <button variant="secondary" className="btn btn-primary " onClick={()=>setShowModal(true)} >View in Modal</button>
    </div>
          <h1 className="uppercase">OceanTechZone Terms & Conditions</h1>
          <p>
            <strong>Effective Date:</strong> 18th August 2025 &nbsp;|&nbsp;
            <strong> Last Updated:</strong> 18th August 2025
          </p>
          <p className="validity">
            <strong>Validity:</strong> These Terms apply whenever customers use
            services provided by OceanTechZone after signing up or entering into
            a service agreement.
          </p>
        </header>

        <main className="terms-content">
          <section>
            <h2 className="uppercase">1. Overview and Acceptance</h2>
            <p>
              <strong>Company Information:</strong> OceanTechZone ("Company",
              "we", "our", "us") provides Bulk SMS services, promotional
              messaging, transactional messaging, WhatsApp marketing, voice call
              services, and related communication technology solutions.
            </p>
            <p>
              <strong>Acceptance:</strong> By registering, accessing our
              platform, or using OceanTechZone services, you acknowledge that
              you have read, understood, and agree to be legally bound by these
              Terms and Conditions ("Terms").
            </p>
            <p>
              <strong>Scope:</strong> These Terms apply to all users of
              OceanTechZone services, including customers, vendors, merchants,
              and contributors of content.
            </p>
          </section>

          <section>
            <h2 className="uppercase">2. Services and Eligibility</h2>
            <ul>
              <li>
                <strong>Services Provided:</strong> Bulk SMS services,
                promotional SMS, transactional SMS, international SMS, WhatsApp
                bulk messaging, IVR solutions, voice call services, and related
                marketing solutions.
              </li>
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old
                or the age of majority in your jurisdiction. If you represent an
                organization, you confirm you have the authority to bind it to
                these Terms.
              </li>
              <li>
                <strong>Service Updates:</strong> OceanTechZone may update,
                modify, or discontinue services at any time without prior
                notice.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">3. Registration and KYC Requirements</h2>
            <ul>
              <li>
                <strong>Registration:</strong> Customers must register via our
                official online form or service agreement.
              </li>
              <li>
                <strong>KYC Documentation:</strong> Valid and verifiable KYC
                documents (such as PAN, GST, Aadhar, or business license) must
                be provided before service activation.
              </li>
              <li>
                <strong>Account Security:</strong> Customers are solely
                responsible for safeguarding their login details, API keys, and
                passwords. OceanTechZone shall not be liable for unauthorized
                usage caused by weak account security.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">4. Customer Responsibilities and Compliance</h2>
            <ul>
              <li>
                <strong>Regulatory Compliance:</strong> Customers must follow
                all applicable laws and regulations, including:
                <ul>
                  <li>TRAI (Telecom Regulatory Authority of India) guidelines</li>
                  <li>DoT (Department of Telecommunications) rules</li>
                  <li>
                    Platform-specific policies (Meta/WhatsApp, Google,
                    Truecaller, etc.)
                  </li>
                  <li>Data protection &amp; privacy laws</li>
                </ul>
              </li>
              <li>
                <strong>Content Restrictions:</strong> Customers must not use
                services to:
                <ul>
                  <li>
                    Send unsolicited spam or promotional SMS without user consent
                  </li>
                  <li>Transmit illegal, misleading, or harmful content</li>
                  <li>
                    Violate TRAI DLT rules for promotional and transactional SMS
                  </li>
                  <li>Engage in phishing, spamming, or fraudulent activities</li>
                </ul>
              </li>
              <li>
                <strong>Monitoring:</strong> OceanTechZone reserves the right to
                monitor compliance and suspend services in case of violations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">5. Billing and Payment Terms</h2>
            <ul>
              <li>
                <strong>Billing Model:</strong> Charges are usage-based, as
                recorded in OceanTechZone systems.
              </li>
              <li>
                <strong>Payment Terms:</strong> Standard payment cycle is 7 days
                from invoice date.
              </li>
              <li>
                <strong>Late Payments:</strong>
                <ul>
                  <li>1.5% monthly interest for first 30 days overdue</li>
                  <li>3% monthly interest if exceeding 30 days</li>
                </ul>
              </li>
              <li>
                <strong>Taxes:</strong> All prices exclude GST and applicable
                taxes.
              </li>
              <li>
                <strong>Service Suspension:</strong> Services may be suspended
                if payment is delayed by more than 7 days.
              </li>
              <li>
                <strong>Invoice Disputes:</strong> Must be raised in writing
                within 3 days of invoice receipt.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">6. Credit Validity and Refund Policy</h2>
            <ul>
              <li>
                <strong>Validity:</strong> Prepaid credits are valid for 12
                months from the date of purchase.
              </li>
              <li>
                <strong>Non-Refundable Items:</strong>
                <ul>
                  <li>Unused credits after account termination</li>
                  <li>
                    Platform fees (monthly/quarterly/annual) once billed
                  </li>
                  <li>
                    Charges for policy violations or spamming activities
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">7. Service Termination</h2>
            <ul>
              <li>
                <strong>Notice Period:</strong>
                <ul>
                  <li>General services – 30 days prior notice</li>
                  <li>Quarterly contracts – 15 days before renewal</li>
                  <li>Virtual numbers/voice services – 90 days notice</li>
                </ul>
              </li>
              <li>
                <strong>Immediate Termination:</strong> OceanTechZone may
                suspend or terminate services without notice for:
                <ul>
                  <li>Non-payment</li>
                  <li>Regulatory violations</li>
                  <li>Spamming, phishing, or illegal usage</li>
                  <li>Breach of these Terms</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">8. Service Level and Availability</h2>
            <ul>
              <li>
                <strong>Best Effort Service:</strong> Services are delivered on
                a best-effort basis.
              </li>
              <li>
                <strong>Maintenance:</strong> Scheduled maintenance may cause
                temporary downtime.
              </li>
              <li>
                <strong>Third-Party Dependency:</strong> We rely on telecom
                providers and internet platforms. OceanTechZone is not
                responsible for interruptions caused by them.
              </li>
              <li>
                <strong>No Guarantee:</strong> We do not guarantee 100% delivery
                or uninterrupted services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">9. Limitation of Liability</h2>
            <ul>
              <li>
                OceanTechZone shall not be liable for indirect, incidental, or
                consequential damages such as loss of business, revenue, or
                data.
              </li>
              <li>
                <strong>Maximum Liability:</strong> Limited to the average
                monthly amount paid by the customer in the last 12 months or INR
                1,00,000, whichever is lower.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">10. Data and Privacy</h2>
            <ul>
              <li>
                <strong>Data Usage:</strong> We collect and process customer
                data only to deliver services.
              </li>
              <li>
                <strong>Ownership:</strong> Customers retain ownership of their
                data.
              </li>
              <li>
                <strong>Security:</strong> Industry-standard security measures
                are implemented.
              </li>
              <li>
                <strong>Third-Party Policy:</strong> Use of third-party tools is
                subject to their privacy policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">11. Intellectual Property</h2>
            <ul>
              <li>
                All rights to OceanTechZone’s platforms, APIs, and proprietary
                technology remain with OceanTechZone.
              </li>
              <li>
                Customers retain rights to their content but grant OceanTechZone
                necessary licenses for service delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">12. Indemnification</h2>
            <p>
              You agree to indemnify OceanTechZone, its directors, and employees
              against any claims, damages, or penalties arising from:
            </p>
            <ul>
              <li>Violation of laws or TRAI/DLT rules</li>
              <li>Misuse of our services</li>
              <li>Transmission of illegal or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">13. Support & Reporting</h2>
            <ul>
              <li>
                <strong>Sales Queries:</strong>{" "}
                <a href="mailto:sales@oceantechzone.com">
                  sales@oceantechzone.com
                </a>
              </li>
              <li>
                <strong>Technical Support:</strong>{" "}
                <a href="mailto:support@oceantechzone.com">
                  support@oceantechzone.com
                </a>
              </li>
              <li>
                <strong>Billing:</strong>{" "}
                <a href="mailto:billing@oceantechzone.com">
                  billing@oceantechzone.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">14. Modifications to Terms</h2>
            <p>
              OceanTechZone reserves the right to update these Terms anytime.
              Continued use of services after updates constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="uppercase">15. Governing Law & Jurisdiction</h2>
            <ul>
              <li>These Terms are governed by the laws of India.</li>
              <li>
                All disputes shall be subject to courts in New Delhi, India.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="uppercase">16. Contact Information</h2>
            <p>
              OceanTechZone <br />
              [Insert Your Office Address Here] <br />
              Email:{" "}
              <a href="mailto:support@oceantechzone.com">
                support@oceantechzone.com
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
          

      <Modal show={showModal} onHide={()=>setShowModal(false)} size="lg" centered >
        <Modal.Header closeButton>
          <Modal.Title>
              Privacy Policy
          </Modal.Title>
          </Modal.Header>
          <Modal.Body
           style={{height:"70vh"}}
          >
            <iframe
             src="/terms.pdf"
             width ="100%"
             height = "100%"
             style={{border : "none"}}
            
            ></iframe>

          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-warning" onClick={()=> setShowModal(false)}>
             Close 
          </Button>
          <Button variant="primary" className="btn btn-warning" onClick={handleDownload}>
             Download PDF
          </Button>
        </Modal.Footer>


       
      </Modal>






   </div>
    </>
  );
}
