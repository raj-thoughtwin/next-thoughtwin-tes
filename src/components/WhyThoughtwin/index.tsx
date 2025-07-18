"use client";
import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./WhyThoughtwin.module.scss";

interface WhyThoughtwinProps {
  text?: string;
}

const WhyThoughtwin: React.FC<WhyThoughtwinProps> = ({ text }) => {
  // fallback to default if no prop provided
  const content =
    text && text.trim().length > 0 ?
      text
    : `Across all these projects, ThoughtWin stands out by blending deep software engineering 
        with AI & modern cloud architecture, building solutions that are secure, scalable, 
        and tailored for industry-specific needs.`;

  return (
    <>
      <section className={styles.Why_Thoughtwin}>
        <Container className="text-center">
          <Row>
            <Col>
              <div>
                <div className={styles.step1Outer}>
                  <div className={styles.itemBox}>
                    <h3>Why ThoughtWin?</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\n/g, ""),
                      }}
                    />
                    <div className="text-center">
                      <Link
                        href="/pricing-calculator"
                        aria-label="Pricing Calculator"
                      >
                        Request an Estimation
                      </Link>
                    </div>
                  </div>
                  <div className={styles.ImgBoxOuter}></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyThoughtwin;
