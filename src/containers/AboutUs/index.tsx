"use client";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { sendEvent } from "@/lib/ga";
import { useScrollToTop } from "@/hook/useScrollToTop";
import AboutIcon1 from "../../../public/assets/images/img/about_icon1.png";
import AboutIcon2 from "../../../public/assets/images/img/about_icon2.png";
import AboutIcon3 from "../../../public/assets/images/img/about_icon3.png";
import AboutIcon4 from "../../../public/assets/images/img/about_icon4.png";
import AboutIcon5 from "../../../public/assets/images/img/about_icon4.png";
import Star from "../../../public/assets/images/start.svg";
import ChooseImg from "../../../public/assets/images/weArearrow.png";
import styles from "./about.module.scss";

const AboutUs = () => {
  useScrollToTop();
  return (
    <>
      <section className={styles.our_team}>
        <div className="container-fluid">
          <div className={`${styles.bg_images11} row`}>
            <div className="container">
              <div className={styles.concact_div}>
                <h2>About Us</h2>
                <h4>
                  We are a community of friendly, open-minded, collaborative and
                  <br /> professionally growing people.
                </h4>
                <Link
                  href="/our-team"
                  onClick={() => {
                    sendEvent({
                      action: "our_team_navigation",
                      category: "navigation",
                      label: "Our Team",
                    });
                  }}
                  aria-label="Pricing Calculator"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about_logo}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.icon_div1} ${styles.about_border} col-md-6 col-6`}
            >
              <div className={styles.about_b}>
                <Image
                  src={AboutIcon1}
                  alt="Business"
                  width={100}
                  height={122}
                />
              </div>
              <span className={styles.number}>07</span>
              <h1>
                YEARS IN
                <br />
                BUSINESS
              </h1>
            </div>
            <div className={`${styles.icon_div1} col-md-6 col-6`}>
              <div className={styles.about_b}>
                <Image
                  src={AboutIcon2}
                  alt="Members"
                  width={100}
                  height={122}
                />
              </div>
              <span className={styles.number}>270+</span>
              <h1>
                TEAM <br />
                MEMBERS
              </h1>
            </div>
          </div>

          <div className={`${styles.about_logo2} row`}>
            <div className={`${styles.icon_div2} col-md-4 col-6`}>
              <Image
                src={AboutIcon3}
                alt="HappyClient"
                width={60}
                height={66}
              />
              <h2>130+</h2>
              <p>
                Happy <br />
                clients
              </p>
            </div>
            <div
              className={`${styles.icon_div2} ${styles.icon_border} col-md-4 col-6`}
            >
              <Image src={AboutIcon4} alt="Project" width={60} height={66} />
              <h2>150+</h2>
              <p>
                Successful <br />
                projects
              </p>
            </div>
            <div
              className={`${styles.icon_div2} ${styles.icon_div2mobilenone} col-md-4 col-6`}
            >
              <Image src={AboutIcon5} alt="Stories" width={60} height={66} />
              <h2>120K+</h2>
              <p>
                Accepted <br />
                User Stories
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.AreaWhoweare}>
        <div className="container">
          <h2>Who We Are?</h2>
          <div className={styles.textArea}>
            <p className={`${styles.textClamp3} text-sm-center`}>
              ThoughtWin is a renowned name in web/mobile design, development in
              the software industry, but – WHY? This is because we design and
              develop websites that represent your company and spread across the
              globe. The client's continued support, trust and recommendations
              are sufficient to describe the quality of our work.
            </p>
            <p>
              <span>
                <Image src={Star} alt="Stories" width={14} height={13} />
              </span>
              We define the goals, analyze the requirements and set the project
              schedule.
            </p>
            <p>
              <span>
                <Image src={Star} alt="Stories" width={14} height={13} />
              </span>
              Depending on your objectives and goals, a sensible approach is
              taken whereby solutions are developed to meet the needs of your
              organization.
            </p>
            <p>
              <span>
                <Image src={Star} alt="Stories" width={14} height={13} />
              </span>
              The company believes in offering high end web solutions at
              affordable prices.
            </p>
            <p>
              <span>
                <Image src={Star} alt="Stories" width={14} height={13} />
              </span>
              The achievement of perfection is our goal, but Excellence is
              guaranteed.
            </p>
            <p>
              <span>
                <Image src={Star} alt="Stories" width={14} height={13} />
              </span>
              We love what we do and we do what our customers love and work with
              excellent customers from around the world to achieve their goals.
            </p>
            <p>
              We have successfully delivered a variety of websites such as
              e-commerce sites (B2B+B2C), enterprise directories, CMS websites,
              data-driven websites, blog websites, community websites, mobile
              applications, etc. We currently have a full-time in-house resource
              team with senior programmers, mid-level programmers, graphic
              designers, front-line developers, a project manager and a business
              analyst. We are a team of amazingly talented undergraduate
              engineers. What this means is that we will have continued access
              to a wealth of resources and information. We support businesses
              worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.skilledArea}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-6 col-lg-12">
              <div className={styles.ProfessionalsBox}>
                <h2>500</h2>
                <h3>Skilled Professionals</h3>
              </div>
            </div>
            <div className="col-md-12 col-xl-6 col-lg-12">
              <div className={styles.ChooseUs}>
                <h3>Why choose us</h3>
                <div className={styles.chooseImg}>
                  <Image src={ChooseImg} alt="blog" />
                </div>
                <Row>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Products delivered:</h4> <h3>150+</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Years on the market:</h4> <h3>07</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Client satisfaction rate:</h4> <h3>99%</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Awards & certifications:</h4> <h3>60+</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
