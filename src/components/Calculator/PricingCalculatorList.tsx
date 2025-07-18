import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Product from "../../../public/assets/images/Product.svg";
import Extension from "../../../public/assets/images/extension.svg";
import Setting from "../../../public/assets/images/settingImg.svg";
import styles from "./calculator.module.scss";
import { sendEvent } from "@/lib/ga";
import Loader from "../Loader";
import HardToChoose from "../Hardtochoose";

const PricingCalculatorList = () => {
  const [isLoadingSoftware, setIsLoadingSoftware] = useState(false);
  const [isLoadingTeamExtension, setIsLoadingTeamExtension] = useState(false);
  const [isLoadingMVP, setIsLoadingMVP] = useState(false);

  const router = useRouter();

  return (
    <>
      <section className={styles.CalculatorArea}>
        <div className="container">
          <div className={styles.CalculatorAreaHeading}>
            <h2>Estimate Your Costs with Our Calculators</h2>
            <p>
              Use our cost calculators to get a precise, accurate estimate for your business needs. Plan smarter, budget
              <br /> better, and make informed decisions with full cost transparency.
            </p>
          </div>

          <div className={styles.CalculatorContent}>
            <div className={styles.calculatorBox}>
              <div className="row">
                <div className="col-md-8 order-2 order-md-1">
                  <div className={styles.leftPanel}>
                    <h3>Product Development Cost Calculator</h3>
                    <p>
                      Get a detailed cost estimate for your software development, covering design, development, testing, and deployment.
                      This tool helps you calculate the total investment needed for your product.
                    </p>
                    <button style={{minWidth: "335px"}}
                      type="button"
                      onClick={() => {
                        router.push("/pricing-calculator/software-development-calculator");
                        setIsLoadingSoftware(true);
                        sendEvent({
                          action: "calculator_Software_click",
                          category: "cilck",
                          label: "Software Development Calculator Click",
                        });
                      }}
                    >
                      {isLoadingSoftware ? <Loader /> : "Calculate Product Development Costs"}
                    </button>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <div className={styles.ImgBox}>
                    <Image src={Product} alt="software development company" title="" />
                  </div>
                </div>
              </div>
            </div>
            {/* FIRST BOX CLOSE */}
            <div className={styles.calculatorBox}>
              <div className="row">
                <div className="col-md-8 order-2 order-md-1">
                  <div className={styles.leftPanel}>
                    <h3>Team Extension Cost Calculator</h3>
                    <p>
                      Estimate the cost of scaling your development team with skilled professionals. This tool helps you budget for hiring
                      remote developers, including salaries, benefits, and operational expenses.
                    </p>
                    <button style={{minWidth: "335px"}}
                      type="button"                
                      onClick={() => {
                        router.push("/pricing-calculator/team-extension-calculator");
                        setIsLoadingTeamExtension(true);
                        sendEvent({
                          action: "calculator_team_extension_click",
                          category: "cilck",
                          label: "Team Extension Calculator Click",
                        });
                      }}
                    >
                      {isLoadingTeamExtension ? <Loader /> : "Calculate Team Extension Costs"}{" "}
                    </button>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <div className={styles.ImgBox}>
                    <Image src={Extension} alt="software development company" title="" />
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND BOC CLOSE */}
            <div className={styles.calculatorBox}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-8 order-2 order-md-1">
                  <div className={styles.leftPanel}>
                    <h3>MVP Development Cost Calculator</h3>
                    <p>
                      Estimate the cost of building a Minimum Viable Product (MVP) for your startup. Calculate expenses for core features,
                      design, and launch to validate your idea without overspending.
                    </p>
                    <button
                      style={{minWidth: "335px"}}
                      type="button"
                      onClick={() => {
                        router.push("/pricing-calculator/mvp-development-calculator");
                        setIsLoadingMVP(true);
                        sendEvent({
                          action: "calculator_mvp_click",
                          category: "cilck",
                          label: "MVP Development Calculator Click",
                        });
                      }}
                    >
                      {isLoadingMVP ? <Loader /> : "Calculate MVP Development Costs"}
                    </button>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <div className={styles.ImgBox}>
                    <Image src={Setting} alt="software development company" title="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <HardToChoose /> */}
    </>
  );
};

export default PricingCalculatorList;
