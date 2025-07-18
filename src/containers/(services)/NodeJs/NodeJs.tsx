"use client";

import {
  NodeEducationIndustriesSliderData,
  NodeHireDeveloperData,
  NodeJsAccordionSectionData,
  NodeJsTopSectionData,
  NodeProjectEstimateSectionData,
} from "@/constants/NodeJsData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Nodejs = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={NodeJsTopSectionData}
        accordianSectionData={NodeJsAccordionSectionData}
        hiredSectionData={NodeHireDeveloperData}
        industriesSectionData={NodeEducationIndustriesSliderData}
        bgColor="#707070"
        projectEstimateSectionData={NodeProjectEstimateSectionData}
      />
    </div>
  );
};

export default Nodejs;
