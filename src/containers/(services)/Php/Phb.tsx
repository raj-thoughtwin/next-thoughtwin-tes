"use client";

import {
  PhpAccordionSectionData,
  PhpHireDeveloperData,
  PhpIndustriesSliderData,
  PhpProjectEstimateSectionData,
  PhpTopSectionData,
} from "@/constants/PhpData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Php = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={PhpTopSectionData}
        accordianSectionData={PhpAccordionSectionData}
        hiredSectionData={PhpHireDeveloperData}
        industriesSectionData={PhpIndustriesSliderData}
        bgColor="#5564a2"
        projectEstimateSectionData={PhpProjectEstimateSectionData}
      />
    </div>
  );
};

export default Php;
