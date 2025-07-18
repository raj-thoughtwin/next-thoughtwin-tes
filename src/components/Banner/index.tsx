"use client";

import Image from "next/image";
import Link from "next/link";
import { sendEvent } from "@/lib/ga";
import BannerBg from "../../../public/assets/images/img/Banner_video.gif";
import styles from "./Banner.module.scss";
// import homeBanner from "../../../public/assets/images/homebanner.png";
import TimeLine from "../../../public/assets/images/timeline.svg";
import MbTimeLine from "../../../public/assets/images/mbtimeline.svg";
const Banner = () => {
  return (
    <>
      <section className={styles.homepage_banner}>
        {/* <Image src={homeBanner} alt="software development company" className={styles.home_bg} /> */}
        {/* <video
        id="banner_video"
        width="100%"
        height="auto"
        src="assets/video/banner_video.mp4"
        autoPlay
        muted
        loop
        style={{ pointerEvents: "none" }}
      ></video> */}
        {/* <Image className={styles.mobile_video} src={BannerBg} alt="software development company" title="" /> */}
        {/* <div className={`${styles.main_headbox} ${styles.mobile_block}`}>
          <h1 className={styles.main_head}>Innovative and intelligent technology solutions and services </h1>
          <Link
            className={`${styles.call_btn} btn  mt-xl-5 mt-lg-5 mt-md-3 mt-3`}
            href="/contact-us"
            onClick={() => {
              sendEvent({
                action: "contact_navigation",
                category: "navigation",
                label: "Sechedule a call",
              });
            }}
          >
            Schedule a call
          </Link>
        </div> */}
        <div className={`${styles.banner_overlay} container`}>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.mobileright}></div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-7 col-12">
              <div className={`${styles.main_headbox} ${styles.mobile_none}`}>
                <h1 className={`${styles.main_head} unbounded`}>
                  Build - Modernize - Scale
                </h1>
                <p>Engineering the next big thing for the digital world</p>
                <Link
                  className={`${styles.call_btn} btn `}
                  href="/pricing-calculator"
                  onClick={() => {
                    sendEvent({
                      action: "contact_navigation",
                      category: "navigation",
                      label: "Sechedule a call",
                    });
                  }}
                  aria-label="Pricing Calculator"
                >
                  Build Your Software
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={`${styles.main_headbox} ${styles.mobile_block}`}>
          <h1 className={styles.main_head}>Build - Modernize - Scale </h1>
          <p>Engineering the next big thing for the digital world</p>
          <Link
            className={`${styles.call_btn} btn`}
            href="/pricing-calculator"
            onClick={() => {
              sendEvent({
                action: "contact_navigation",
                category: "navigation",
                label: "Sechedule a call",
              });
            }}
            aria-label="Pricing Calculator"
          >
            Build Your Software
          </Link>
        </div>
      </section>
      <section className={styles.Timeline_bg}>
        <Image
          src={TimeLine}
          alt=""
          className="d-xl-block d-lg-block d-md-block d-none "
        />
        <Image
          src={MbTimeLine}
          alt=""
          className="d-xl-none d-lg-none d-md-none d-block mt-4"
        />
      </section>
    </>
  );
};

export default Banner;
