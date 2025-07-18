"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../app/(pages)/blogs/[slug]/blogdetail.module.scss";
import Introimg from "../../../public/assets/images/IntroImg.png";
import Link from "next/link";
import React from "react";
import diy from "../../../public/assets/images/diy.jpg";
import { portfolioData } from "@/constants/PortfolioData";
import LeftArrow from "../../../public/assets/images/portfolionew/arrow-left.svg";
import ShareIcon from "../../../public/assets/images/portfolionew/share.svg";
import ClockIcon from "../../../public/assets/images/portfolionew/clock.svg";
import HeartIcon from "../../../public/assets/images/portfolionew/Heart.svg";
import ShareModal from "@/components/Sharemodal";
import { copyUrl } from "@/utility/copyUrl";
import RecentBlogPortfolio from "@/components/RecentBlogPortfolio";
interface PortfolioCaseStudy {
  params: any;
  title: string;
  deliveredBy: string;
  projectOverview: string;
  engineeringHighlights: string;
  engineeringDecisions: string;
  visualizationReporting?: string;
  businessTransformation?: string;
  whyThoughtWin?: string;
  uniqueField?: string;
}

export default function PortfolioCaseStudy(params: any) {
  const [copied, setCopeid] = useState(false);
  const formatTextWithLineBreaks = (text: string) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />").replace(/•/g, "<br />&#8226;");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const caseStudy = portfolioData.find(
    (item) =>
      item?.link?.toLowerCase().trim() ===
      decodeURIComponent(`/portfolio/${params?.params?.uniqueField}`)
        ?.toLowerCase()
        .trim()
  );
  return (
    <div>
      <section className={styles.BlogDetailArea}>
        <Container>
          <div className={styles.headingBox}>
            <div className={styles.portfolio_header}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Link
                  className={styles.backbtn}
                  href="/portfolios"
                  aria-label="Portfolio"
                >
                  <Image src={LeftArrow} alt="" className="align-bottom me-1" />
                  Back to Portfolio
                </Link>
                <div className={styles.shareimg}>
                  <button onClick={handleShow}>
                    <Image src={ShareIcon} alt="" />
                  </button>
                  <ShareModal show={show} handleClose={handleClose} />
                </div>
              </div>
              <h2>
                {params?.params?.title}
                {/* <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      copyUrl(window.location.href, copied, setCopeid);
                    }}
                    className="clipboard ms-2"
                    aria-label="Copy to clipboard"
                    title="Copy to clipboard"
                  >
                    {!copied && (
                      <i
                        className={`${styles.copyicon} fa-regular fa-copy`}
                        style={{ fontSize: "22px", verticalAlign: "super" }}
                      ></i>
                    )}

                    {copied && (
                      <i
                        className={`${styles.checkgreen} fa-solid fa-circle-check `}
                      ></i>
                    )}
                  </a> */}
              </h2>

              <p>
                <span>Delivered By:</span> {params?.params?.deliveredBy}
              </p>
              <div
                className={`${styles.minread} d-flex align-items-center justify-content-between`}
              >
                <div>
                  <Image src={ClockIcon} alt="" className="align-bottom me-1" />
                  <span>10 min read</span>
                </div>
                <div className={styles.heart_div}>
                  <Image src={HeartIcon} alt="" />
                  <div className={styles.border_line}></div>
                  <p className="m-0">242</p>
                </div>
              </div>
            </div>

            <div className={styles.Scalable}>
              <div className={styles.ImageBox}>
                {caseStudy?.image && (
                  <Image src={caseStudy.image} alt="BlogImage" />
                )}
              </div>
            </div>

            <div className={styles.Introduction}>
              <Row className="align-items-start">
                <Col sm={7} md={7} lg={8}>
                  <div>
                    <h2>Overview</h2>

                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.projectOverview
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <h2>Engineering Highlights</h2>

                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.engineeringHighlights
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <h2>Engineering Decisions</h2>

                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.engineeringDecisions
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <h2>Visualization & Reporting</h2>

                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.visualizationReporting
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <h2>Business Transformation</h2>
                    {/* <p>{params?.params?.businessTransformation} </p>
                     */}
                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.businessTransformation
                        ),
                      }}
                    />
                  </div>
                  <div className={styles.TextimonialBox}>
                    <h2>Testimonial</h2>

                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: formatTextWithLineBreaks(
                          params?.params?.Testimonial
                        ),
                      }}
                    />
                  </div>
                </Col>
                <Col
                  sm={5}
                  md={5}
                  lg={4}
                  style={{ position: "sticky", top: "76px" }}
                >
                  <div className={styles.IntroRight}>
                    <div className={styles.ImgBox}>
                      <Image src={Introimg} alt="" height={225} />
                      <div className={styles.TextBox}>
                        <h3>Estimate Your Costs with</h3>
                        <h2>Our Calculators</h2>
                        <Link
                          href="/pricing-calculator"
                          aria-label="Pricing calculator"
                        >
                          <button>Get your calculation</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <RecentBlogPortfolio />
    </div>
  );
}
