"use client";

import { sendEvent } from "@/lib/ga";
import styles from "./portfolioTabs.module.scss";
import story from "../../../public/assets/images/img/storyboard.jpg";
import Image from "next/image";

interface PortfolioTabsProps {
  tabValue: string;
  setTabValue: (value: string) => void;
}

const PortfolioTabs = ({ tabValue, setTabValue }: PortfolioTabsProps) => {
  const isActive = (value: string) => tabValue === value;

  return (
    <section className={`${styles.porfolio_tab} ${styles.AIContentArea}`}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.nopadd} ${styles.portfolio_div} col-md-3`}>
            <div
              onClick={() => {
                setTabValue("ai-portfolio");
                sendEvent({
                  action: "ai_navigation",
                  category: "navigation",
                  label: "AI Portfolio",
                });
              }}
            >
              <h3 className={`${styles.border_both} ${isActive("ai-portfolio") ? "active_tab" : ""}`}>
                AI <span className={styles.mob_portfolio}>SOLUTIONS</span>
              </h3>
            </div>
          </div>
          <div className={`${styles.nopadd} ${styles.portfolio_div} col-md-3`}>
            <div
              onClick={() => {
                setTabValue("iot-portfolio");
                sendEvent({
                  action: "iot_navigation",
                  category: "navigation",
                  label: "IOT Portfolio",
                });
              }}
            >
              <h3 className={`${styles.border_both} ${isActive("iot-portfolio") ? "active_tab" : ""}`}>
                IOT <span className={styles.mob_portfolio}>PORTFOLIO</span>
              </h3>
            </div>
          </div>

          <div className={`${styles.nopadd} ${styles.portfolio_div} col-md-3`}>
            <div
              onClick={() => {
                setTabValue("web-portfolio");
                sendEvent({
                  action: "web_navigation",
                  category: "navigation",
                  label: "Web Portfolio",
                });
              }}
            >
              <h3 className={`${styles.border_both} ${isActive("web-portfolio") ? "active_tab" : ""}`}>
                WEB <span className={styles.mob_portfolio}>PORTFOLIO</span>
              </h3>
            </div>
          </div>

          <div className={`${styles.nopadd} ${styles.portfolio_div} col-md-3`}>
            <div
              onClick={() => {
                setTabValue("mobile-portfolio");
                sendEvent({
                  action: "mobile_navigation",
                  category: "navigation",
                  label: "Mobile Portfolio",
                });
              }}
            >
              <h3 className={`${styles.border_both} ${isActive("mobile-portfolio") ? "active_tab" : ""}`}>
                MOBILE <span className={styles.mob_portfolio}>PORTFOLIO</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTabs;
