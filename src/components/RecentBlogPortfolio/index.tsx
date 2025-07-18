"use client";
import React from "react";
import Slider from "react-slick";
import styles from "../../app/(pages)/blogs/[slug]/blogdetail.module.scss";
import Image from "next/image";
import Time from "../../../public/assets/images/Time.svg";
import Heart from "../../../public/assets/images/heart.svg";
import RedArrow from "../../../public/assets/images/redarrow.svg";

export default function RecentBlogPortfolio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // 👉 Dummy static slides (replace with real data later)
  const slides = [1, 2, 3];

  return (
    <div className={styles.BlogDetailArea}>
      {/* <div className={`${styles.BlogSliderDeTail}`}>
        <div className={`${styles.sliderDetailOuter} blodSlider container`}>
          <h2>Recent Portfolio</h2>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide} className={styles.BlogCard}>
                <div className={styles.ImageBox}>
                  <Image
                    src="/assets/images/blogImages/dummy.jpg"
                    alt="Portfolio"
                    width={300}
                    height={180}
                  />
                </div>
                <div className={styles.ContentBox}>
                  <div className={styles.topInner}>
                    <h6>Jan 1, 2025</h6>
                    <div className={styles.Meta}>
                      <Image src={Time} alt="time" width={14} height={14} />3
                      min read
                    </div>
                  </div>

                  <h3 className={styles.midHead}>Blog Title {slide}</h3>

                  <div className={styles.Actions}>
                    <div className={styles.Left}>
                      <Image src={Heart} alt="like" width={17} />
                      <span>123</span>
                    </div>
                    <div className={styles.Right}>
                      <button
                        type="button"
                        style={{ all: "unset", cursor: "pointer" }}
                      >
                        <span>View More</span>{" "}
                        <Image
                          src={RedArrow}
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
    </div>
  );
}
