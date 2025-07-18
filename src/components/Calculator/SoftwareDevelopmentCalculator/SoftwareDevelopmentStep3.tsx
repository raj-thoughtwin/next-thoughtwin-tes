"use client";

import React, { useEffect, useState } from "react";
import CalculatorInputList from "@/components/CalculatorInputList";
import { ProductDevelopmentCostCalculator } from "@/constants/CalculatorData";
import { SoftwareDevelopmentCalculatorStepNewProps, StepDataItem } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep3: React.FC<SoftwareDevelopmentCalculatorStepNewProps> = ({
  formData,
  setFormData,
  allSelectedOptions,
  handleChange,
  setIsNextEnabled,
}) => {
  const [step3Data, setStep3Data] = useState<StepDataItem | null>(null);
  const step2SelectedOption = allSelectedOptions[1]; 

  useEffect(() => {
    const matchedData = ProductDevelopmentCostCalculator.find(
      (item) => item.title === step2SelectedOption
    );

    setStep3Data(matchedData || null);
    setIsNextEnabled(false);
  }, [step2SelectedOption, setIsNextEnabled]);

  const handlePlatformTypeHaveChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      platformType: selectedLabel,
    }));
    setIsNextEnabled(true);
  };

  if (!step3Data) return <p>Please select an option in Step 2 to continue.</p>;

  return (
    <div>
      <CalculatorInputList
        data={step3Data}
        isShow={false}
        handleChange={handleChange}
        handleSelect={handlePlatformTypeHaveChange}
        formData={formData}
        setFormData={setFormData}
        selectedOption={allSelectedOptions[2]}
      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep3;
