"use client";

import { serviceFormValidationSchema } from "@/validation/validationSchema";
import {
  MernHireDeveloperData,
  MernIndustriesSliderData,
  MernProjectEstimateSectionData,
  MernStackAccordionSectionData,
  MernStackTopSectionData,
} from "@/constants/MernStackData";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const MernStack = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={MernStackTopSectionData}
        accordianSectionData={MernStackAccordionSectionData}
        hiredSectionData={MernHireDeveloperData}
        industriesSectionData={MernIndustriesSliderData}
        bgColor="#3f6798"
        projectEstimateSectionData={MernProjectEstimateSectionData}
      />
    </div>
  );
};

export default MernStack;
