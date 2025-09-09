"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./policy.css";

export default function PrivacyPolicy() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/privacy.pdf";
    link.download = "/privacy.pdf";
    link.click();
  };

  return (
    <>
      <div className="policy-container">
        {/* Top Buttons */}
        <div className="d-flex float-end gap-2 mt-4">
          <button
            variant="primary"
            className="btn btn-primary"
            onClick={handleDownload}
          >
            Download PDF
          </button>

        </div>

        {/* Header Section */}
        <header className="policy-header">
          <h1 className="uppercase">OceanTechZone Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> 09-09-2025 &nbsp;|&nbsp;
            <strong>Company Name:</strong> OceanTechZone &nbsp;|&nbsp;
            <strong>Website:</strong> oceantechzone.in
          </p>
          <p>
            At <b>OceanTechZone</b>, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data when you
            interact with our website, services, or campaigns.
          </p>
        </header>

        {/* Main Content */}
        <main className="policy-content">
          {/* Section 1 */}
          <section>
            <h2 className="uppercase">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, job title, etc.
              </li>
              <li>
                <strong>Business Information:</strong> Details related to your
                business, marketing needs, and service requirements.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                details, and activity on our website (via cookies or tracking
                tools).
              </li>
              <li>
                <strong>Payment Information:</strong> Only when you purchase
                services, processed securely through trusted third-party
                providers.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="uppercase">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and manage our digital marketing services.</li>
              <li>Respond to inquiries, requests, and customer support needs.</li>
              <li>
                Send newsletters, updates, and promotional materials (with your
                consent).
              </li>
              <li>
                Improve our website, campaigns, and overall user experience.
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="uppercase">3. Sharing of Information</h2>
            <p>We do not sell or rent your personal information. However, we may share data with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Trusted third parties that
                help us deliver services (e.g., email platforms, analytics tools,
                payment processors).
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law, court
                order, or government regulations.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of a merger,
                acquisition, or business restructuring.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="uppercase">4. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and deliver personalized
              marketing campaigns.
            </p>
            <p>
              You can disable cookies in your browser settings, but some features
              may not function properly.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="uppercase">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, misuse, or
              disclosure. However, no online transmission is 100% secure, and we
              cannot guarantee absolute protection.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="uppercase">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal data.</li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at:{" "}
              <a href="mailto:info@oceantechzone.com">
                info@oceantechzone.com
              </a>.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="uppercase">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of external sites.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="uppercase">8. Children’s Privacy</h2>
            <p>
              Our services are not directed toward individuals under the age of
              18. We do not knowingly collect information from minors.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="uppercase">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated Effective Date.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="uppercase">10. Contact Us</h2>
            <p>For questions about this Privacy Policy, please contact us:</p>
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

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          <iframe
            src="/privacy.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-primary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={handleDownload}
          >
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
