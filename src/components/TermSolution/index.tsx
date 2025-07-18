"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./termsolution.module.scss";
import IntroductionIcon from "../../../public/assets/images/Introduction.svg";
import Redquotes from "../../../public/assets/images/quotesred.svg";
import TechIcon from "../../../public/assets/images/tech.svg";
import ApproachIcon from "../../../public/assets/images/Approach.svg";
import CaseIcon from "../../../public/assets/images/Case.svg";
import FAQIcon from "../../../public/assets/images/FAQ.svg";
import Link from "next/link";

const TermSolution = (params?: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = [
    { src: "/assets/images/img/career/people.png", alt: "People" },
    {
      src: "/assets/images/img/career/Careenbanner.webp",
      alt: "Career Banner",
    },
    {
      src: "/assets/images/img/career/careen_banner4.jpg",
      alt: "Career Banner 4",
    },
    {
      src: "/assets/images/img/career/careen_banner2.jpg",
      alt: "Career Banner 2",
    },
  ];

  const data = [
    {
      title: "Introduction",
      subtitle: `The business use-case and demand behind ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")} ${(params?.params?.params?.makeData?.Term || params?.params?.params?.Term || "").split("-").join(" ")}`,
      description: `${params?.params?.params?.makeData?.Introduction || params?.params?.params?.Introduction}`,
      icon: IntroductionIcon,
    },
    ...(params?.params?.params?.makeData?.Make ?
      [
        {
          title: "Technology Stack",
          subtitle: `Why ${params?.params?.params?.makeData?.Make.split("-").join(" ")} is best-suited`,
          description: `${params?.params?.params?.makeData?.Stack || params?.params?.params?.Stack}`,
          icon: TechIcon,
        },
      ]
    : []),
    {
      title: "Our Approach",
      subtitle: "How Thoughtwin delivers measurable results",
      description: `${params?.params?.params?.makeData?.Approach || params?.params?.params?.Approach}`,
      icon: ApproachIcon,
    },
    {
      title: "Case Study",
      subtitle: `The business use-case and demand behind ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")} ${(params?.params?.params?.makeData?.Term || params?.params?.params?.Term || "").split("-").join(" ")}`,
      description: `The business use-case and demand behind ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")} ${(params?.params?.params?.makeData?.Term || params?.params?.params?.Term || "").split("-").join(" ")}`,
      icon: CaseIcon,
    },
    {
      title: "FAQ Section",
      subtitle: `The business use-case and demand behind ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")} ${(params?.params?.params?.makeData?.Term || params?.params?.params?.Term || "").split("-").join(" ")}`,
      description: `What is a ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")} ${(params?.params?.params?.makeData?.Term || params?.params?.params?.Term || "").split("-").join(" ")}?\nAns: ${params?.params?.params?.makeData?.Ques1 || params?.params?.params?.Ques1}${params.params.params.makeData?.Make ? `\n\n Why choose ${(params?.params?.params?.makeData?.Make || "").split("-").join(" ")} for ${(params?.params?.params?.makeData?.Prefix || params?.params?.params?.Prefix || "").split("-").join(" ")}?\n Ans: ${params?.params?.params?.makeData?.Ques2}` : ""}\n\n How long does it take to build?\n Ans: ${params?.params?.params?.makeData?.Ques3 || params?.params?.params?.Ques3}`,
      icon: FAQIcon,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className={styles.termSolution}>
        <div className="container">
          <h2>
            How Thoughtwin Delivers Powerful
            <br />{" "}
            {(params?.params?.params?.Prefix || "")
              .split("-")
              .map(
                (word: any) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}{" "}
            {(params?.params?.params?.Term || "")
              .split("-")
              .map(
                (word: any) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}{" "}
            Solutions
          </h2>
          <div className="col-md-12">
            <div
              className={`${styles.set_acc} mt-md-5 term_accordian`}
              id="accordion"
            >
              {data.map((job, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.accordian_name}>
                      <div className={styles.card_header} id="headingOne">
                        <h5 className="mb-0">
                          <div className={styles.btndescription}>
                            <div className={styles.IconBox}>
                              {job && job.icon && (
                                <Image
                                  src={job.icon}
                                  alt="software development company"
                                  title=""
                                />
                              )}
                            </div>
                            <button
                              className={`${styles.btn_link1} ${styles.accordian_head} btn accoedianbtn ${openIndex === index ? "" : "collapsed"}`}
                              onClick={() => {
                                toggleAccordion(index);
                              }}
                              aria-expanded={openIndex === index}
                              aria-controls={`collapse${index}`}
                              style={{ width: "100%", textAlign: "left" }}
                            >
                              <h4>{job && job.title}</h4>
                              <h5>{job && job.subtitle}</h5>
                            </button>
                          </div>
                        </h5>
                      </div>

                      {openIndex === index && (
                        <div
                          id={`collapse${index}`}
                          className="collapse show"
                          aria-labelledby="headingOne"
                        >
                          <div className={`${styles.card_body} card-body`}>
                            <p>
                              <pre
                                style={{
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-word",
                                }}
                              >
                                {job && job.description}
                              </pre>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className={styles.requestBtn}>
            Request a free consultation
          </button>
        </div>
      </section>

      <section className={styles.estimationArea}>
        <div className="container">
          <div
            className={`${styles.estimationImg} row justify-content-between`}
          >
            <div className="col-md-12 col-lg-4">
              <div className={styles.leftEstimation}>
                <h3>Estimate cost of development</h3>
                <p>Don't let financial uncertainties limit you.</p>
                <Link
                  href="/pricing-calculator"
                  aria-label="Pricing Calculator"
                >
                  <button>Get your calculation</button>
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className={styles.rightEstimation}>
                <Image
                  src={Redquotes}
                  alt="software development company"
                  title=""
                />
                <h4>
                  Our <span>Smart Developers</span> build innovative, efficient,
                  and high performance solutions.
                </h4>

                <div className={styles.ashuText}>
                  <h6>Ashutosh Verma</h6>
                  <p>CMO at Thoughtwin IT Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.chooseUs}>
        <div className="container">
          <h2>Why successful companies choose us</h2>
          <p>
            To get an accurate cost estimate for your project, contact us for a
            consultation. We'll meet to
            <br />
            understand your specific needs and create a customized budget model
            just for you.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermSolution;
