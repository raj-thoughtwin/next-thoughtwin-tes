"use client";

import {
  ReactNativeAccordionSectionData,
  ReactNativeHireDeveloperData,
  ReactNativeIndustriesSliderData,
  ReactnativeProjectEstimateSectionData,
  ReactNativeTopSectionData,
} from "@/constants/ReactnativeData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const ReactNative = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={ReactNativeTopSectionData}
        accordianSectionData={ReactNativeAccordionSectionData}
        hiredSectionData={ReactNativeHireDeveloperData}
        industriesSectionData={ReactNativeIndustriesSliderData}
        bgColor="#106b90"
        projectEstimateSectionData={ReactnativeProjectEstimateSectionData}
      />
    </div>
  );
};

export default ReactNative;
