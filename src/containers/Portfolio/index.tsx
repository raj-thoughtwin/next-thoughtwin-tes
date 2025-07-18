"use client";
import { useState } from "react";
import { portfolioData } from "@/constants/PortfolioData";
import PortfolioTabs from "@/components/PortfolioTab/PortfolioTab";
import PortfolioList from "@/components/PortfolioList";
import { useScrollToTop } from "@/hook/useScrollToTop";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("ai-portfolio");
  useScrollToTop();

  const filteredPortfolio = portfolioData.filter((item) => item.isTab === tabValue);

  return (
    <div>
      <section className={styles.portfolio_header}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
               <div className={styles.PortfolioTop}>
               <h3>We believe in clean & quality work</h3>
               <p>Take a look at the work we did for their marketing.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioTabs tabValue={tabValue} setTabValue={setTabValue} />
      <PortfolioList tabValue={tabValue} portfolioData={filteredPortfolio} />
    </div>
  );
};

export default Portfolio;
