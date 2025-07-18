"use client";

import React from "react";
import { useScrollToTop } from "@/hook/useScrollToTop";
import TermBanner from "@/components/TermBanner";
import TermSolution from "@/components/TermSolution";
import CostComparisonChart from "@/components/CostComparisonChart";
import ProjectSlider from "@/components/ProectSlider/ProjectSlider";

const Term = (params: any) => {
  useScrollToTop();
  return (
    <>
      <TermBanner params={params} />
      <TermSolution params={params} />
      <CostComparisonChart />
      <ProjectSlider />
    </>
  );
};

export default Term;
