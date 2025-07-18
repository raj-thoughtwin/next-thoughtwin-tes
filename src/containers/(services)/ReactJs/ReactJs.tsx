"use client";

import {
  ReactHireDeveloperData,
  ReactIndustriesSliderData,
  ReactJsAccordionSectionData,
  ReactJsTopSectionData,
  ReactProjectEstimateSectionData,
} from "@/constants/ReactJsData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const ReactJs = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={ReactJsTopSectionData}
        accordianSectionData={ReactJsAccordionSectionData}
        hiredSectionData={ReactHireDeveloperData}
        industriesSectionData={ReactIndustriesSliderData}
        bgColor="#106b90"
        projectEstimateSectionData={ReactProjectEstimateSectionData}
      />
    </div>
  );
};

export default ReactJs;
