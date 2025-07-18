"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ProjectSlider.module.scss";

const ProjectSlider = () => {
  return (
    <section className={styles.project_slider}>
      <div className={styles.project_slider_outer}>
        <div id="project_own" className="owl-carousel owl-theme">
          <Swiper
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".swiper-pagination1",
              renderBullet: (index, className) =>
                `<button class="${className}" aria-label="Go to slide ${index + 1}" title="Go to slide ${index + 1}">
              <span class="sr-only"></span>
           </button>`,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                // spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
            className="owl-stage"
          >
            {/* Slide 1 */}
            <SwiperSlide className="item">
              <div className={`${styles.custom_project} ${styles.blu_panel}`}>
                <div className="row align-items-center">
                  <div className="col-md-5 col-6 col-sm-12">
                    <div className={styles.project_img}>
                      <Image
                        src="/assets/images/img/post_carr.png"
                        width={500}
                        height={400}
                        alt="Hire Android Developer Python Node ReactJS Expert"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-6 col-sm-12">
                    <div className={styles.project_content}>
                      <h5>POST your cars</h5>
                      <h2>an industry’s leading car-selling platform</h2>
                      <h4>Python, ReactJS</h4>
                      <Link href="/portfolios" aria-label="Portfolios">
                        view next project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="item">
              <div className={`${styles.custom_project} ${styles.green_panel}`}>
                <div className="row align-items-center">
                  <div className="col-md-7 col-6 col-sm-12">
                    <div className={styles.project_content}>
                      <h5>world funds</h5>
                      <h2>A financial investment company</h2>
                      <h4>Nodejs, ReactJS</h4>
                      <Link href="/portfolios" aria-label="View Portfolio">
                        view next project
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 col-6 col-sm-12">
                    <div className={`${styles.project_img} ${styles.img_tw}`}>
                      <Image
                        src="/assets/images/img/projectt2.png"
                        width={500}
                        height={400}
                        alt="hire python developers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination1" />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
