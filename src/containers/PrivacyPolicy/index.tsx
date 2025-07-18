import { Col, Container, Row } from "react-bootstrap";
import styles from "./privacypolicy.module.scss";
import Image from "next/image";
import privacybg from "../../../public/assets/images/privacy/privacybg.svg";
export default function PrivacyPolicy() {
  return (
    <>
      <div className={styles.privacySection}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className={styles.privacy_head}>
                <h2>Privacy Policy</h2>
                <p>Your privacy matters to us.</p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <Image src={privacybg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.Privacy_content}>
        <Container>
          <Row>
            <Col md={12}>
              <h3>
                We at ThoughtWin understand that your privacy is important to
                you. We are committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and protect your
                information. By using our site or services, you agree to this
                policy.
              </h3>
            </Col>
            <Col md={12}>
              <div className={styles.List_privacy}>
                <h4>1. Information We Collect</h4>
                <ul>
                  <li>
                    <b>Personal Data:</b> Name, email, phone, company name,
                    billing info.
                  </li>
                  <li>
                    <b>Non-Personal Data: </b>Browser type, IP address, pages
                    visited.
                  </li>
                  <li>
                    <b>Cookies:</b> Used for tracking preferences and improving
                    services.
                  </li>
                </ul>
              </div>
              <div className={styles.List_privacy}>
                <h4>2. How We Use Your Information</h4>
                <ul>
                  <li>To provide and improve services</li>
                  <li>To communicate updates and offers</li>
                  <li>To process transactions</li>
                  <li>To ensure legal compliance</li>
                </ul>
              </div>
              <div className={styles.List_privacy}>
                <h4>3. Sharing Your Information</h4>
                <p>
                  We may share your data with service providers, for legal
                  reasons, or during business transfers. Third parties must
                  adhere to strict data protection standards.
                </p>
              </div>
              <div className={styles.List_privacy}>
                <h4>4. Your Rights</h4>
                <ul>
                  <li>
                    <b>Access:</b> Request access to the information we hold
                    about you.
                  </li>
                  <li>
                    <b>Correction: </b>Request correction of inaccurate or
                    incomplete data.
                  </li>
                  <li>
                    <b>Deletion:</b> Request deletion of your personal data.
                  </li>
                  <li>
                    <b>Data Portability:</b> Request a copy of your data in a
                    machine-readable format.
                  </li>
                  <li>
                    <b>Opt-Out:</b> Opt-out of marketing communications or data
                    processing for specific purposes.
                  </li>
                </ul>
              </div>
              <div className={styles.List_privacy}>
                <h4>5. Data Security & Retention</h4>
                <p>
                  We implement strong security measures and retain data only as
                  needed for our operations or legal requirements.
                </p>
              </div>
              <div className={styles.List_privacy}>
                <h4>6. Cookies</h4>
                <p>
                  Manage cookie preferences in your browser settings. Disabling
                  cookies may affect functionality.
                </p>
              </div>
              <div className={styles.List_privacy}>
                <h4>7. Policy Updates</h4>
                <p>
                  We may update this policy periodically. Changes will be posted
                  with a new effective date.
                </p>
              </div>
              <div className={styles.List_privacy}>
                <h4>8. Contact Us</h4>
                <p className="pb-3">For questions, reach out to:</p>
                <ul>
                  <li>
                    <b>Email:</b>{" "}
                    <a href="mailto:hr@thoughtwin.com">hr@thoughtwin.com</a>
                  </li>
                  <li>
                    <b>Phone:</b> <a href="tel:+919977069348">+919977069348</a>
                  </li>
                  <li>
                    <b>Address:</b> 1 Panna estate, Kesar Bagh Rd, Indira Gandhi
                    Nagar, Indore, Madhya Pradesh 452001
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
