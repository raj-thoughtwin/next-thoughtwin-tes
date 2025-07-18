"use client";

import {
  PythonAccordionSectionData,
  PythonHireDeveloperData,
  PythonIndustriesSliderData,
  PythonProjectEstimateSectionData,
  PythonTopSectionData,
} from "@/constants/Python";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Python = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={PythonTopSectionData}
        accordianSectionData={PythonAccordionSectionData}
        hiredSectionData={PythonHireDeveloperData}
        industriesSectionData={PythonIndustriesSliderData}
        bgColor="#5564a2"
        projectEstimateSectionData={PythonProjectEstimateSectionData}
      />
    </div>
  );
};

export default Python;
