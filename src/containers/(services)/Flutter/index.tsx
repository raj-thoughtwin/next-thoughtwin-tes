"use client";

import ServicePageDynamic from "@/components/ServicePageDynamic";
import {
  FlutterAccordionSectionData,
  FlutterHireDeveloperData,
  FlutterIndustriesSliderData,
  FlutterProjectEstimateSectionData,
  FlutterTopSectionData,
} from "@/constants/FlutterData";
import { serviceFormValidationSchema } from "@/validation/validationSchema";

const Flutter = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={FlutterTopSectionData}
        accordianSectionData={FlutterAccordionSectionData}
        hiredSectionData={FlutterHireDeveloperData}
        industriesSectionData={FlutterIndustriesSliderData}
        bgColor="#1f5d9c"
        projectEstimateSectionData={FlutterProjectEstimateSectionData}
      />
    </div>
  );
};

export default Flutter;
