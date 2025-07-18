"use client";

import React from "react";
import {
  AccordianSectionData,
  HireDeveloperItem,
  IndustryItem,
  ProjectEstimateItem,
  SectionData,
  ServiceFormInterface,
} from "@/types/types";
import { useScrollToTop } from "@/hook/useScrollToTop";
import ProjectSlider from "../ProectSlider/ProjectSlider";
import TopSection from "../TopSection";
import AccordionSection from "../AccordianSection";
import HireDeveloperSection from "../HireDeveloperSection";
import IndustriesSliderSection from "../IndustriesSliderSection";
import ProjectEstimateSection from "../ProjectEstimateSection";
interface ServicePageProps {
  onSubmit?: (values: ServiceFormInterface) => Promise<void>;
  validationSchema?: string | {};
  topSectionData: SectionData[];
  accordianSectionData: AccordianSectionData[];
  hiredSectionData: HireDeveloperItem[];
  industriesSectionData: IndustryItem[];
  projectEstimateSectionData: ProjectEstimateItem[];
  bgColor?: string;
}

const ServicePageDynamic = ({
  topSectionData,
  accordianSectionData,
  hiredSectionData,
  industriesSectionData,
  bgColor,
  projectEstimateSectionData,
}: ServicePageProps) => {
  useScrollToTop();
  return (
    <>
      <TopSection topSectionData={topSectionData} />
      <AccordionSection accordianSectionData={accordianSectionData} />
      <HireDeveloperSection hiredSectionData={hiredSectionData} />
      <IndustriesSliderSection industriesSectionData={industriesSectionData} bgColor={bgColor} />
      <ProjectEstimateSection projectEstimateSectionData={projectEstimateSectionData} />
      <ProjectSlider />
    </>
  );
};

export default ServicePageDynamic;
