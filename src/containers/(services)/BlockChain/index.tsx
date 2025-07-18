"use client";

import { serviceFormValidationSchema } from "@/validation/validationSchema";
import ServicePageDynamic from "@/components/ServicePageDynamic";
import {
  BlockChainAccordionSectionData,
  BlockchainHireDeveloperData,
  BlockchainIndustriesSliderData,
  BlockchainProjectEstimateSectionData,
  BlockchainTopSectionData,
} from "@/constants/BlockChainData";

const BlockChain = () => {
  return (
    <div>
      <ServicePageDynamic
        validationSchema={serviceFormValidationSchema}
        topSectionData={BlockchainTopSectionData}
        accordianSectionData={BlockChainAccordionSectionData}
        hiredSectionData={BlockchainHireDeveloperData}
        industriesSectionData={BlockchainIndustriesSliderData}
        bgColor="#FF8282"
        projectEstimateSectionData={BlockchainProjectEstimateSectionData}
      />
    </div>
  );
};

export default BlockChain;
