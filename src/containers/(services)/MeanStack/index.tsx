"use client";

import { serviceFormValidationSchema } from "@/validation/validationSchema";
import {
  MeanHireDeveloperData,
  MeanIndustriesSliderData,
  MeanProjectEstimateSectionData,
  MeanStackAccordionSectionData,
  MeanStackTopSectionData,
} from "@/constants/MeanStackData";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const MeanStack = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={MeanStackTopSectionData}
        accordianSectionData={MeanStackAccordionSectionData}
        hiredSectionData={MeanHireDeveloperData}
        industriesSectionData={MeanIndustriesSliderData}
        bgColor="#156b91"
        projectEstimateSectionData={MeanProjectEstimateSectionData}
      />
    </div>
  );
};

export default MeanStack;
