"use client";

import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";
import {
  AngularAccordionSectionData,
  AngularHireDeveloperData,
  AngularIndustriesSliderData,
  AngularJSSectionData,
  AngularProjectEstimateSectionData,
} from "@/constants/AngularData";

const Angular = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={AngularJSSectionData}
        accordianSectionData={AngularAccordionSectionData}
        hiredSectionData={AngularHireDeveloperData}
        industriesSectionData={AngularIndustriesSliderData}
        bgColor="#b94c4d"
        projectEstimateSectionData={AngularProjectEstimateSectionData}
      />
    </div>
  );
};

export default Angular;
