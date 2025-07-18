"use client";

import Slider from "react-slick";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { awardList } from "@/constants/AwardListData";
import RoundImg from "../../../public/assets/images/img/techno-round.png";
import styles from "./award.module.scss";

const Awards = () => {
  useEffect(() => {
    const fixAriaHiddenLinks = () => {
      document.querySelectorAll('[aria-hidden="true"]').forEach((hiddenEl) => {
        hiddenEl
          .querySelectorAll("a, button, input, textarea, select")
          .forEach((focusable) => {
            focusable.setAttribute("tabindex", "-1");
          });
      });
    };

    fixAriaHiddenLinks(); // initial fix

    const observer = new MutationObserver(() => {
      fixAriaHiddenLinks(); // run again whenever DOM changes
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
    cssEase: "ease-in-out",
    speed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.award_area_outer}>
        <div className={`${styles.award_text} text-center`}>
          <div className={styles.round_pinkimagdiv3}>
            <Image src={RoundImg} alt="round pink area" />
          </div>
          <h3 className={styles.client_texthead}>Award and Certifications</h3>
          <p>
            We have worked with some globally recognised organisations and
            produced perfectly{" "}
          </p>
          <p>sized web and mobile apps for them.</p>
        </div>

        <div className={`${styles.award_area} awardBtn`}>
          <div className="container">
            <Slider {...sliderSettings}>
              {awardList.map((award, index) => (
                <div key={index} className={`${styles.award_item} text-center`}>
                  {/* <a href={award.href} target="_blank" rel="noopener noreferrer" className={styles.award_slider}>
                    <Image src={award.src} alt={award.alt} width={150} height={150} />
                  </a> */}
                  <Link
                    href=""
                    className={styles.award_slider}
                    aria-label="footer"
                  >
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
