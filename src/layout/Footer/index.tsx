"use client";

import Link from "next/link";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import Awards from "@/components/Award";
import FooterLogo from "../../../public/assets/images/img/newfooter-logo.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <Awards />
      <section className={styles.footer_bottom}>
        <div className="container">
          <div className="row">
            {/* FOR MOBILE */}
            <div
              className={`${styles.thoughtwin_logo2} col-md-12  mb-xl-0 mb-lg-0 mb-md-0`}
            >
              <p className={styles.footer_feel}>Feel free to drop us a note:</p>
              <p className="mb-0">
                {" "}
                <Image src={FooterLogo} alt="ThoughtWin company logo" />{" "}
              </p>
              <p className={`${styles.footer_inquiry} m-0`}>
                or{" "}
                <Link href="#" aria-label="Send Inquiry">
                  send your inquiry
                </Link>{" "}
                <Link
                  href="mailto:info@thoughtwin.com"
                  className={styles.mailLink}
                  aria-label="Mail"
                >
                  info@thoughtwin.com
                </Link>
              </p>
              {/* <p className={`${styles.footer_website} m-0`}>
                
              </p> */}
            </div>
            {/* FOR MOBILE */}
            <div
              className={`${styles.thoughtwin_logo} col-xl-3 col-lg-3 col-md-3 col  mb-xl-0 mb-lg-0 mb-md-0`}
            >
              <h4>India</h4>
              <div className="row">
                <div
                  className={`${styles.contact_usmargin} col-xl-12 col-lg-12 col-md-12 col-12`}
                >
                  <p>
                    <span style={{ fontWeight: "600" }}>Indore -</span> 1 Panna
                    estate, Kesar Bagh Rd, Indira Gandhi Nagar, Indore, Madhya
                    Pradesh 452001
                  </p>

                  <p>
                    <span style={{ fontWeight: "600" }}>Neemuch -</span>{" "}
                    Bungalow No.07, behind IDBI Bank, Neemuch, Madhya Pradesh
                    458441
                  </p>
                  <div className={styles.branch_margin}>
                    <h4>Canada</h4>
                    <p>
                      Greater Toronto - 3145 Goretti place Mississauga ON,
                      Canada
                    </p>
                  </div>

                  <div
                    className={`${styles.conatct_us} ${styles.desktopNone} col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-0 mt-lg-0 mt-md-3 mt-0`}
                  >
                    <h4>Contact Us</h4>

                    <ul className={styles.hire_developerlist}>
                      <li>
                        <Link
                          href="tel:+91 6265525569"
                          onClick={() => {
                            sendEvent({
                              action: "contact_navigation",
                              category: "navigation",
                              label: "For Sales & Business",
                            });
                          }}
                          aria-label="Contact Us"
                        >
                          <strong>For Sales & Business</strong>
                          <br />
                          India: +91 6265525569
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="tel:+91 9977069348"
                          onClick={() => {
                            sendEvent({
                              action: "contact_navigation",
                              category: "navigation",
                              label: "For Job",
                            });
                          }}
                          aria-label="Job"
                        >
                          <strong>For Job</strong>
                          <br />
                          India: +91 9977069348
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.social_box}>
                    <ul
                      className={`${styles.social_list} ${styles.topNone} d-flex gap-2 list-unstyled p-0`}
                    >
                      <li>
                        <Link
                          href="https://www.facebook.com/thoughtwin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          onClick={() => {
                            sendEvent({
                              action: "facebook_navigation",
                              category: "navigation",
                              label: "Facebook",
                            });
                          }}
                        >
                          <i
                            className={`${styles.face_margin} fab fa-facebook`}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      {/* <li>
                        <a href="https://www.twitter.com/thoughtwin/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <i className={`${styles.face_margin} fab fa-twitter`} aria-hidden="true" />
                        </a>
                      </li> */}
                      <li>
                        <Link
                          href="https://in.linkedin.com/company/thoughtwin"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          onClick={() => {
                            sendEvent({
                              action: "linkedIn_navigation",
                              category: "navigation",
                              label: "LinkedIn",
                            });
                          }}
                        >
                          <i
                            className={`${styles.face_margin} fab fa-linkedin`}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/thoughtwin__/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          onClick={() => {
                            sendEvent({
                              action: "instagram_navigation",
                              category: "navigation",
                              label: "Instagram",
                            });
                          }}
                        >
                          <i
                            className={`${styles.face_margin} fab fa-instagram `}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/@ThoughtWin_IT_Solutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Youtube"
                          onClick={() => {
                            sendEvent({
                              action: "youtube_navigation",
                              category: "navigation",
                              label: "Youtube",
                            });
                          }}
                        >
                          <i
                            className={`${styles.face_margin} fab fa-youtube `}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.desktopNone} ${styles.padMobile} col-xl-3 col-lg-3 col-md-3 col-12`}
            >
              <div
                className={`${styles.conatct_us} ${styles.contact_usmargin1} ${styles.quik_link}`}
              >
                <h4>Quick links</h4>
                <ul className={styles.hire_developerlist}>
                  <li className="pt-2">
                    <Link href="/privacy-policy" aria-label="Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* Hire Developers */}
            <div
              className={`${styles.hire_developer} col-xl-3 col-lg-3 col-md-4 col-12 mt-xl-0 mt-lg-0 mt-md-0 mt-3 pr-0`}
            >
              <h4>Hire Developers</h4>
              <ul className={styles.hire_developerlist}>
                <li>
                  <Link
                    href="/python"
                    onClick={() => {
                      sendEvent({
                        action: "python_navigation",
                        category: "navigation",
                        label: "Python Developers",
                      });
                    }}
                    aria-label="Python Developer"
                  >
                    Python Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ror"
                    onClick={() => {
                      sendEvent({
                        action: "ror_navigation",
                        category: "navigation",
                        label: "Rouby on Rails Developers",
                      });
                    }}
                    aria-label="Ruby on Rails Developer"
                  >
                    Ruby on Rails Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/node-js"
                    className={styles.node_jstext}
                    onClick={() => {
                      sendEvent({
                        action: "node_navigation",
                        category: "navigation",
                        label: "Node Developers",
                      });
                    }}
                    aria-label="Node JS Developer"
                  >
                    Node JS Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/angular"
                    onClick={() => {
                      sendEvent({
                        action: "angular_navigation",
                        category: "navigation",
                        label: "AngularJS Developers",
                      });
                    }}
                    aria-label="AngularJS Developer"
                  >
                    AngularJS Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/android"
                    onClick={() => {
                      sendEvent({
                        action: "android_navigation",
                        category: "navigation",
                        label: "Android Developers",
                      });
                    }}
                    aria-label="Android Developer"
                  >
                    Android Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ios"
                    onClick={() => {
                      sendEvent({
                        action: "ios_navigation",
                        category: "navigation",
                        label: "Ios Developers",
                      });
                    }}
                    aria-label="IOS Developer"
                  >
                    IOS Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/php"
                    onClick={() => {
                      sendEvent({
                        action: "php_navigation",
                        category: "navigation",
                        label: "Php & Laravel Developers",
                      });
                    }}
                    aria-label="PHP & Laravel Developer"
                  >
                    PHP & Laravel Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flutter"
                    onClick={() => {
                      sendEvent({
                        action: "flutter_navigation",
                        category: "navigation",
                        label: "Flutter Developers",
                      });
                    }}
                    aria-label="Flutter Developer"
                  >
                    Flutter Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mern-stack"
                    onClick={() => {
                      sendEvent({
                        action: "mern_navigation",
                        category: "navigation",
                        label: "Merstack Developers",
                      });
                    }}
                    aria-label="MERN Stack Developer"
                  >
                    MERN Stack Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/block-chain"
                    onClick={() => {
                      sendEvent({
                        action: "youtube_navigation",
                        category: "navigation",
                        label: "Blockchain Development",
                      });
                    }}
                    aria-label="Blockchain Development"
                  >
                    Blockchain Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div
              className={`${styles.mobileNone} col-xl-3 col-lg-3 col-md-3 col-12`}
            >
              <div
                className={`${styles.conatct_us} ${styles.contact_usmargin1} ${styles.quik_link}`}
              >
                <h4>Quick links</h4>
                <ul className={styles.hire_developerlist}>
                  <li>
                    <Link href="/privacy-policy" aria-label="Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div
              className={`${styles.conatct_us} ${styles.mobileNone} col-xl-3 col-lg-3 col-md-3 col-12   mt-xl-0 mt-lg-0 mt-md-3 mt-0`}
            >
              <h4>Contact Us</h4>
              <p className={styles.footer_feel}>Feel free to drop us a note:</p>
              <ul className={styles.hire_developerlist}>
                <li>
                  <Link
                    href="tel:+91 6265525569"
                    onClick={() => {
                      sendEvent({
                        action: "contact_navigation",
                        category: "navigation",
                        label: "For Sales & Business",
                      });
                    }}
                    aria-label="Sales And Business"
                  >
                    <strong>For Sales & Business</strong>
                    <br />
                    India: +91 6265525569
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+91 9977069348"
                    onClick={() => {
                      sendEvent({
                        action: "contact_navigation",
                        category: "navigation",
                        label: "For Job",
                      });
                    }}
                    aria-label="Job"
                  >
                    <strong>For Job</strong>
                    <br />
                    India: +91 9977069348
                  </Link>
                </li>
                <li>
                  <br />
                  <iframe
                    id="iframe-0.08313699840671118"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/1?ref_domain=www.thoughtwin.com&uid=1984828&rel_nofollow=true&ref_path=/"
                    height="40"
                    scrolling="no"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      display: "block",
                      height: "40px",
                    }}
                    title="[object Object]1"
                  />
                </li>
              </ul>
            </div>
            <div className={`${styles.desktopNone} col-md-12 `}>
              <div
                className={`${styles.web_mobile} pt-xl-0 pt-lg-0 pt-md-4 pt-4`}
              >
                <p className="mb-0">
                  <strong>Building amazing</strong>
                </p>
                <p className="mb-1">web &amp; mobile apps</p>
              </div>
              <div className={`${styles.social_box} ${styles.SocialMobile}`}>
                <ul
                  className={`${styles.social_list} d-flex gap-2 list-unstyled p-0 m-0`}
                >
                  <li>
                    <Link
                      href="https://www.facebook.com/thoughtwin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i
                        className={`${styles.face_margin} fab fa-facebook`}
                        aria-hidden="true"
                        title="Facebook"
                      />
                    </Link>
                  </li>
                  {/* <li>
                    <a href="https://www.twitter.com/thoughtwin/" target="_blank" rel="noopener noreferrer">
                      <i className={`${styles.face_margin} fab fa-twitter`} aria-hidden="true" title="Twitter" />
                    </a>
                  </li> */}
                  <li>
                    <Link
                      href="https://in.linkedin.com/company/thoughtwin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i
                        className={`${styles.face_margin} fab fa-linkedin`}
                        aria-hidden="true"
                        title="LinkedIn"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/thoughtwin__/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i
                        className={`${styles.face_margin} fab fa-instagram `}
                        aria-hidden="true"
                        title="Instagram"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@ThoughtWin_IT_Solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <i
                        className={`${styles.face_margin} fab fa-youtube `}
                        aria-hidden="true"
                        title="YouTube"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bordernew_top}>
          <div className={`${styles.footer_bottomcontainer} container`}>
            <div className="row">
              <div className="col-md-12">
                <div className={styles.copy_right}>
                  <p className={`${styles.font_size_12px} text-center`}>
                    Copyright © {new Date().getFullYear()}, All Rights
                    Reserved. Thoughtwin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
