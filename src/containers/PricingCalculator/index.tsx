"use client";

import { useScrollToTop } from "@/hook/useScrollToTop";
import PricingCalculatorList from "@/components/Calculator/PricingCalculatorList";

const PricingCalculator = () => {
  useScrollToTop();

  return (
    <div>
      <PricingCalculatorList />
    </div>
  );
};

export default PricingCalculator;
