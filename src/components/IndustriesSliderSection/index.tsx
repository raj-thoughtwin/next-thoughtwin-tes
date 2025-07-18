"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IndustriesSliderSectionProps } from "@/types/types";
import styles from "./Industriesslidersection.module.scss";

const IndustriesSliderSection = ({ industriesSectionData, bgColor }: IndustriesSliderSectionProps) => {
  const [sliderHeight, setSliderHeight] = useState("500px");

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setSliderHeight("420px");
      } else if (width > 767 && width <= 1024) {
        setSliderHeight("380px");
      } else {
        setSliderHeight("400px");
      }
    };


    updateHeight(); // Set initial value
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className={`${styles.sec_aducation_learn} ${styles.vertcle_slider} verticleslider`} style={{ backgroundColor: bgColor }}>
      <div className={styles.blockchain_container}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.edu_learn_slider} position-relative`}>
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  spaceBetween={30}
                  mousewheel={true}
                  loop={true}
                  autoplay={false}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<button class="${className}" aria-label="Go to slide ${index + 1}" title="Go to slide ${index + 1}"><span></span></button>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                  className={`${styles.block_slider} ${styles.vertcle_slider} owl-carousel owl-theme`}
                  style={{ height: sliderHeight }}
                >
                  {industriesSectionData.map((item, index) => (
                    <SwiperSlide key={index} className="owl-item">
                      <div className="item">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-6">
                            <div className={styles.edu_text}>
                              <h6>Industries We Serve</h6>
                              <h2>{item.title}</h2>
                              <p>{item.description}</p>
                              <div className={styles.edu_linehead}>
                                <h3>{item.projects}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5">
                            <div className="imageBox">
                              <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                width={350}
                                height={300}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="industriesBtns">
                  <div className="swiper-button-prev owl-prev"></div>
                  <div className="swiper-button-next owl-next"></div>
                </div>

                {/* Pagination Dots */}
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSliderSection;
