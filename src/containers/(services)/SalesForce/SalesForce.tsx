"use client";

import {
  SalesforceAccordionSectionData,
  SalesforceHireDeveloperData,
  SalesforceIndustriesSliderData,
  SalesforceProjectEstimateSectionData,
  SalesforceTopSectionData,
} from "@/constants/SalesForceData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const SalesForce = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={SalesforceTopSectionData}
        accordianSectionData={SalesforceAccordionSectionData}
        hiredSectionData={SalesforceHireDeveloperData}
        industriesSectionData={SalesforceIndustriesSliderData}
        bgColor="#4BBEE3"
        projectEstimateSectionData={SalesforceProjectEstimateSectionData}
      />
    </div>
  );
};

export default SalesForce;
