"use client";

import Link from "next/link";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import { useScrollToTop } from "@/hook/useScrollToTop";
import Icon11 from "../../../public/assets/images/img/icon11.jpg";
import styles from "./ourTeam.module.scss";

const OurTeam = () => {
  useScrollToTop();

  return (
    <>
      <section className={`${styles.banner1} container-fluid`}>
        <div className={styles.banner_img}></div>
        <div className={styles.banner_heading}>
          <p>
            We are a community of friendly, open-minded,
            <br />
            collaborative and professionally growing people.
          </p>
          <Link
            href="/contact-us"
            className={`${styles.site_btn} ${styles.btn_join}`}
            onClick={() => {
              sendEvent({
                action: "contact_navigation",
                category: "navigation",
                label: "Join the team",
              });
            }}
            aria-label="Join the team"
          >
            Join the team
          </Link>
        </div>
      </section>

      <section className={styles.footer_div}>
        <div className="container-fluid">
          <div className="row">
            <div
              className={`${styles.social11} col-xl-6 col-lg-6 col-md-6 col-6`}
            >
              <Link
                href="/career"
                className={styles.social_icon}
                onClick={() => {
                  sendEvent({
                    action: "career_navigation",
                    category: "navigation",
                    label: "Careers",
                  });
                }}
                aria-label="Careers"
              >
                <Image src={Icon11} alt="Careers" />
                <h2>Careers</h2>
              </Link>
            </div>
            <div
              className={`${styles.social11}  col-xl-6 col-lg-6 col-md-6 col-6`}
            >
              <Link
                href="/contact-us"
                onClick={() => {
                  sendEvent({
                    action: "contact_navigation",
                    category: "navigation",
                    label: "Contact Us",
                  });
                }}
                aria-label="Contact Us"
              >
                <Image src={Icon11} alt="ContactUs" />
                <h2>Contact Us</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
