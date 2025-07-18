"use client";

import { serviceFormValidationSchema } from "@/validation/validationSchema";
import {
  IosAccordionSectionData,
  IosHireDeveloperData,
  IosIndustriesSliderData,
  IosProjectEstimateSectionData,
  IosTopSectionData,
} from "@/constants/IosServicesData";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Ios = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={IosTopSectionData}
        accordianSectionData={IosAccordionSectionData}
        hiredSectionData={IosHireDeveloperData}
        industriesSectionData={IosIndustriesSliderData}
        // bgColor="#ACA2A2"
        bgColor="#7a6c6c"
        projectEstimateSectionData={IosProjectEstimateSectionData}
      />
    </div>
  );
};

export default Ios;
