"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TopSectionProps } from "@/types/types";
import styles from "./TopSection.module.scss";

const TopSection = ({ topSectionData }: TopSectionProps) => {
  return (
    <>
      {topSectionData.map((section, index) => (
        <section
          key={index}
          className={`${styles.python_maintop} ${styles.android_section}`}
        >
          <div className={styles.blockchain_container}>
            <div className={styles.section_top_blockchain}>
              <div className="container">
                <div className={styles.blockchain_area}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                      <div className={styles.block_bannerLeft}>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        <Link
                          href="/pricing-calculator"
                          aria-label="Pricing Calculator"
                        >
                          {section.btn}
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className={styles.img_block}>
                        <Image
                          src={section.img}
                          width={500}
                          height={500}
                          alt="android programming"
                          title=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default TopSection;
