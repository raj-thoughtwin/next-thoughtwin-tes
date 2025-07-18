"use client";

import React from "react";
import Image from "next/image";
import TechnoRound from "../../../public/assets/images/img/techno-round.png";
import styles from "./technology.module.scss";

const Technology = () => {
  return (
    <section className={styles.technology_worksection}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.round_pinkimagdiv}>
              <Image src={TechnoRound} alt="technology round" />
            </div>
          </div>
  
          <div className={`${styles.icon_img} col-md-12`}>
            <h3 className={`${styles.home_padd} ${styles.technology_workhead} pb-3`}>Technologies we work with</h3>
            <p className={`${styles.major_text} text-center`}>
              We have teamed up with major technology platforms to keep giving our customers
            </p>
            <p className={`${styles.major_text} ${styles.major_textnew}`}>most upgraded world-class software performance.</p>
          </div>
        </div>

        <div className={`${styles.align11} row`}>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg} ${styles.clients_img1} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg1} ${styles.clients_img2} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg2} ${styles.clients_img3} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg3} ${styles.clients_img4} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg4} ${styles.clients_img5} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg5} ${styles.clients_img6} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg6} ${styles.clients_img7} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg7} ${styles.clients_img8} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg8} ${styles.clients_img9} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg9} ${styles.clients_img10} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg10} ${styles.clients_img11} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3 col-6">
            <div className={`${styles.box_bg11} ${styles.clients_img12} ${styles.clients_img} ${styles.clients_imgsimilar}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
