"use client";

import React from "react";
import Image from "next/image";
import RoundSolution from "../../../public/assets/images/img/solution-round.png";
import WebDevlopment from "../../../public/assets/images/img/WEB_development.svg";
import UIDesigner from "../../../public/assets/images/img/UI_UX.svg";
import MobileDevelopment from "../../../public/assets/images/img/MAD.svg";
import IOT from "../../../public/assets/images/img/IOT.svg";
import styles from "./solutions.module.scss";

const Solutions = () => {
  return (
    <section className={styles.solution_deliver}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.round_pinkimagdiv1}>
              <Image src={RoundSolution} alt="round pink area" />
            </div>
          </div>
          <div className="col-md-12">
            <div className={styles.solution_delever_text}>
              <h2 className={styles.solution_delivertext}>Solutions we deliver</h2>
              <p className={`${styles.solution_deliverpara} text-center`}>
                Thoughtwin IT Solutions assists to develop an impeccable website and mobile application. We serve on numerous domains and
                transform client's thoughts into reality.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div
            className={`${styles.position_relative} col-xl-3 col-lg-3 col-md-6 col-12 mb-xl-0 mb-lg-0 mb-md-3 mb-0 text-center  buttons`}
          >
            <div className={`${styles.solution_deliver_col} ${styles.draw}`}>
              <Image src={WebDevlopment} alt="web developer" />
              <p className={`${styles.bold} ${styles.hover_txt}`}>Web Development</p>
              <p className={`${styles.mt_10} ${styles.ui_para}`}>
                We offer one of the best Web Development services in numerous countries.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-xl-0 mb-lg-0 mb-md-3 mb-0 text-center buttons">
            <div className={`${styles.solution_deliver_col} ${styles.draw}`}>
              <Image src={UIDesigner} alt="ui ux developer" />
              <p className={`${styles.bold} ${styles.hover_txt}`}>Ui/UX Design</p>
              <p className={`${styles.mt_10} ${styles.ui_para}`}>
                We have proficient UI/UX Designers for interface design, user experience, conversion optimization.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-xl-0 mb-lg-0 mb-md-3 mb-0 text-center buttons">
            <div className={`${styles.solution_deliver_col} ${styles.draw}`}>
              <Image src={MobileDevelopment} alt="mobile app development company" />
              <p className={`${styles.bold} ${styles.hover_txt}`}>Mobile App Development</p>
              <p className={`${styles.mt_10} ${styles.ui_para}`}>
                We provide professional Android, IOS, React Native, and Flutter developers.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-xl-0 mb-lg-0 mb-md-3 mb-0 text-center buttons">
            <div className={`${styles.solution_deliver_col} ${styles.draw}`}>
              <Image src={IOT} alt="iot application development" />
              <p className={`${styles.bold} ${styles.hover_txt}`}>AI Development & Integration</p>
              <p className={`${styles.mt_10} ${styles.ui_para}`}>
              We develop and integrate AI-powered solutions to automate processes, drive insights, and enhance user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
