"use client";
import { AccordianSectionProps } from "@/types/types";
import React, { useState } from "react";
import styles from "./accordiansection.module.scss";

const AccordionSection = ({ accordianSectionData }: AccordianSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  // const toggleIndex = (index: number) => {
  //   setActiveIndex((prev) => (prev === index ? null : index));
  // };
  const [activeIndexes, setActiveIndexes] = useState<{ [key: number]: number }>({});

const toggleIndex = (sectionIndex: number, itemIndex: number) => {
  setActiveIndexes((prev) => ({
    ...prev,
    [sectionIndex]: prev[sectionIndex] === itemIndex ? -1 : itemIndex,
  }));
};

  return (
    <section className={`${styles.sec_blockchain_grad} ${styles.android_sec}`}>
    <div className={styles.blockchain_container}>
      <div className="container">
        <div className={styles.accordion} id="accordionExample">
          {accordianSectionData.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              {section.accordianQue.map((item, i) => {
                const isOpen = (activeIndexes[sectionIndex] ?? 0) === i; // default open first (index 0)
                const collapseId = `collapse-${sectionIndex}-${i}`;
                const headingId = `heading-${sectionIndex}-${i}`;
                return (
                  <div className="card" key={i}>
                    <div className="card-head" id={headingId}>
                      <h2
                        className={`mb-0 ${!isOpen ? "collapsed" : ""}`}
                        onClick={() => toggleIndex(sectionIndex, i)}
                        aria-expanded={isOpen}
                        aria-controls={collapseId}
                        style={{ cursor: "pointer" }}
                      >
                        {item.question}
                      </h2>
                    </div>
                    <div
                      id={collapseId}
                      className={`collapse ${isOpen ? "show" : ""}`}
                      aria-labelledby={headingId}
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                        {item.answers?.map((sub, j) => (
                          <p key={j}>
                            <b>{sub.title}</b> {sub.answ}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default AccordionSection;
