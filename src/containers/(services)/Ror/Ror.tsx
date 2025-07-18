"use client";

import {
  RorAccordionSectionData,
  RorHireDeveloperData,
  RorIndustriesSliderData,
  RorProjectEstimateSectionData,
  RorTopSectionData,
} from "@/constants/RorData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Ror = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={RorTopSectionData}
        accordianSectionData={RorAccordionSectionData}
        hiredSectionData={RorHireDeveloperData}
        industriesSectionData={RorIndustriesSliderData}
        bgColor="#c53644"
        projectEstimateSectionData={RorProjectEstimateSectionData}
      />
    </div>
  );
};

export default Ror;
