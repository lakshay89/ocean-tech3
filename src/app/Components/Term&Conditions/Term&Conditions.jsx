"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./terms.css";

export default function TermsAndConditions() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/terms.pdf";
    link.download = "/terms.pdf";
    link.click();
  };

  return (
    <>
      <div className="terms-page">
        <div className="container terms-container">
          <header className="terms-header">
            <div className="d-flex mt-4 gap-3 float-end">
              <button
                variant="primary"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download PDF
              </button>
            </div>
            <h1 className="uppercase">OceanTechZone Terms & Conditions</h1>
            <p>
              <strong>Effective Date:</strong> 09-09-2025 &nbsp;|&nbsp;
              <strong>Company Name:</strong> OceanTechZone &nbsp;|&nbsp;
              <strong>Website:</strong> oceantechzone.in
            </p>
          </header>

          <main className="terms-content">
            <section>
              <h2 className="uppercase">1. Introduction</h2>
              <p>
                Welcome to <b> OceanTechZone.</b> By accessing or using our website,
                services, or digital marketing solutions, you agree to comply
                with and be bound by these Terms & Conditions. Please read them
                carefully before using our services.
              </p>
            </section>

            <section>
              <h2 className="uppercase">2. Services</h2>
              <p>
                OceanTechZone provides digital marketing solutions including
                (but not limited to) SEO, social media marketing, bulk SMS,
                email marketing, website design, and related services.
              </p>
              <ul>
                <li>
                  We reserve the right to modify, update, or discontinue any
                  service at our discretion.
                </li>
                <li>
                  Service timelines and results may vary based on business
                  requirements, strategies, and third-party platform policies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">3. Eligibility</h2>
              <ul>
                <li>Are at least 18 years old.</li>
                <li>
                  Have the authority to represent yourself or the business you
                  engage on behalf of.
                </li>
                <li>
                  Will provide accurate and complete information during service
                  registration.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">4. Payments & Billing</h2>
              <ul>
                <li>
                  All services are billed according to the agreed quotation or
                  pricing plan.
                </li>
                <li>
                  Payments must be made in full before the commencement of
                  services unless otherwise agreed in writing.
                </li>
                <li>
                  Delayed or failed payments may result in service suspension
                  or termination.
                </li>
                <li>All fees are non-refundable, except in cases explicitly stated in a written agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">5. User Responsibilities</h2>
              <ul>
                <li>Not misuse our services for illegal, fraudulent, or harmful activities.</li>
                <li>
                  Provide accurate business information and necessary access credentials (e.g., website, social media, or tools).
                </li>
                <li>
                  Comply with all applicable laws and third-party policies (Google, Facebook, etc.) when availing digital marketing services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">6. Intellectual Property</h2>
              <ul>
                <li>All content, designs, logos, and materials created by OceanTechZone remain our intellectual property unless otherwise agreed.</li>
                <li>Clients retain ownership of their brand assets, business data, and provided content.</li>
                <li>Unauthorized use of our materials or website content is strictly prohibited.</li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">7. Limitation of Liability</h2>
              <ul>
                <li>OceanTechZone is not liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
                <li>We do not guarantee specific outcomes (rankings, traffic, or conversions), as these depend on external factors.</li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">8. Third-Party Services</h2>
              <p>
                Our services may involve third-party platforms, tools, or providers (e.g., Google, Facebook, email/SMS gateways). We are not responsible for:
              </p>
              <ul>
                <li>Changes, policies, or limitations imposed by third parties.</li>
                <li>Any service interruptions or performance issues caused by external platforms.</li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">9. Termination of Services</h2>
              <ul>
                <li>Either party may terminate the service agreement with written notice.</li>
                <li>OceanTechZone reserves the right to suspend or terminate services if you violate these Terms & Conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="uppercase">10. Privacy</h2>
              <p>Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
            </section>

            <section>
              <h2 className="uppercase">11. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Delhi, India].
              </p>
            </section>

            <section>
              <h2 className="uppercase">12. Contact Us</h2>
              <p>
                For any questions regarding these Terms & Conditions, you can reach us at:
              </p>
              <p>
                <strong>Phone:</strong> 9289933499 <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@oceantechzone.com">
                  info@oceantechzone.com
                </a>
                <br />
                <strong>Website:</strong> oceantechzone.in
              </p>
            </section>
          </main>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Terms & Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "70vh" }}>
            <iframe
              src="/terms.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-warning"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="btn btn-warning"
              onClick={handleDownload}
            >
              Download PDF
            </Button>
          </Modal.Footer>
        </Modal>
      </div >
    </>
  );
}
