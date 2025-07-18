"use client";

import React from "react";
import Image from "next/image";
import Term from "../../../public/assets/images/Termbanner.svg";
import styles from "./Termbanner.module.scss";
import Link from "next/link";

const TermBanner = (params: any) => {
  return (
    <>
      <section className={styles.temBannerArea}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className={styles.termbanner}>
                <h2>
                  {(
                    params?.params?.params?.makeData?.Prefix ||
                    params?.params?.params?.Prefix ||
                    ""
                  )
                    .split("-")
                    .map(
                      (word: any) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}{" "}
                  {(
                    params?.params?.params?.makeData?.Term ||
                    params?.params?.params?.Term ||
                    ""
                  )
                    .split("-")
                    .map(
                      (word: any) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}{" "}
                  {params?.params?.params?.makeData && (
                    <>
                      {" with "}
                      {(params?.params?.params?.makeData?.Make || "")
                        .split("-")
                        .map(
                          (word: any) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                        )
                        .join(" ")}{" "}
                      |{" "}
                    </>
                  )}
                  Thoughtwin
                </h2>
                <h3>
                  Scalable{" "}
                  {(
                    params?.params?.params?.makeData?.Term ||
                    params?.params?.params?.Term ||
                    ""
                  )
                    .split("-")
                    .map(
                      (word: any) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}{" "}
                  Solutions{" "}
                  {params?.params?.params?.makeData && (
                    <>
                      {"Using"}{" "}
                      {(params?.params?.params?.makeData?.Make || "")
                        .split("-")
                        .map(
                          (word: any) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                        )
                        .join(" ")}
                    </>
                  )}{" "}
                  for Your{" "}
                  {(
                    params?.params?.params?.makeData?.Prefix ||
                    params?.params?.params?.Prefix ||
                    ""
                  )
                    .split("-")
                    .map(
                      (word: any) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </h3>
                <p>
                  Thoughtwin offers end-to-end{" "}
                  {(
                    params?.params?.params?.makeData?.Term ||
                    params?.params?.params?.Term ||
                    ""
                  )
                    .split("-")
                    .join(" ")}{" "}
                  tailored for your{" "}
                  {(
                    params?.params?.params?.makeData?.Prefix ||
                    params?.params?.params?.Prefix ||
                    ""
                  )
                    .split("-")
                    .join(" ")}{" "}
                  needs. Built by expert{" "}
                  {(params?.params?.params?.makeData?.Make || "")
                    .split("-")
                    .join(" ")}{" "}
                  team for performance, scale, and innovation.
                </p>
                <Link
                  href="/pricing-calculator"
                  aria-label="Pricing Calculator"
                >
                  <button>Get your calculation</button>
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className={styles.termImg}>
                <Image src={Term} alt="software development company" title="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermBanner;
