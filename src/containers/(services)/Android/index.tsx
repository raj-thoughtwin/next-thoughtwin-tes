"use client";
import {
  AndroidAccordianSectionData,
  AndroidHiredSectionData,
  AndroidIndustriesSectionData,
  AndroidProjectEstimateSectionData,
  AndroidTopSectionData,
} from "@/constants/AndroidServicesData";
import ServicePageDynamic from "@/components/ServicePageDynamic";

const Android = () => {
  return (
    <div>
      <ServicePageDynamic
        topSectionData={AndroidTopSectionData}
        accordianSectionData={AndroidAccordianSectionData}
        hiredSectionData={AndroidHiredSectionData}
        industriesSectionData={AndroidIndustriesSectionData}
        bgColor={"#007a57"}
        projectEstimateSectionData={AndroidProjectEstimateSectionData}
      />
    </div>
  );
};

export default Android;
