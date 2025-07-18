"use client";

import React from "react";
import Image from "next/image";
import truncate from "html-truncate";
import Link from "next/link";
import { PortfolioItem } from "@/types/portfolioTypes";
import styles from "./portfolioList.module.scss";

interface PortfolioListProps {
  portfolioData: PortfolioItem[];
  tabValue: string;
}

// Helper to truncate HTML content by visible words
const truncateHtmlWithFormat = (html: string, wordLimit: number) => {
  return truncate(html, wordLimit);
};

const PortfolioList = ({ portfolioData }: PortfolioListProps) => {
  return (
    <section className={styles.portfolio_list}>
      <div className="container-fluid md-p-0">
        <div className={styles.portfolio_padding}>
          {portfolioData.map((item, idx) => (
            <div className={styles.tabCustomArea} key={idx}>
              <div className="row">
                <div
                  className={`${styles.portfolio_contact} col-md-7 col-lg-9 order-2 order-md-1 order-lg-1
`}
                >
                  <div className={styles.hide_text}>
                    <h1>{item.title}</h1>
                    <div
                      className={styles.gray_text}
                      dangerouslySetInnerHTML={{
                        __html: truncateHtmlWithFormat(item.subtitle, 4000), // Adjust word limit here
                      }}
                    />
                  </div>
                  {item?.link && (
                    <div className={styles.sitelink}>
                      <Link
                        href={item.link || "#"}
                        rel="noopener noreferrer"
                        aria-label="View Case Study"
                      >
                        View Case Study
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className={`${styles.ImageBoxAi} col-md-5 col-lg-3 order-1 order-md-2 order-lg-2`}
                >
                  <Image src={item.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
