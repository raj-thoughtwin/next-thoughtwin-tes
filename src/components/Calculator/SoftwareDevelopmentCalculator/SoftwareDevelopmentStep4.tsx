"use client";

import React, { useEffect, useState } from "react";
import { ProductDevelopmentCostCalculator } from "@/constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { SoftwareDevelopmentCalculatorStepNewProps, StepOption } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep4: React.FC<SoftwareDevelopmentCalculatorStepNewProps> = ({
  formData,
  setFormData,
  allSelectedOptions,
  handleChange,
  setIsNextEnabled,
}) => {
  const [step4Data, setStep4Data] = useState<StepOption[] | null>(null);
  const step3SelectedOption = allSelectedOptions[2];

  useEffect(() => {
    const step3Match = ProductDevelopmentCostCalculator.find((item) => item.title === step3SelectedOption);

    setStep4Data(step3Match?.options || null);
    setIsNextEnabled(false);
  }, [step3SelectedOption, setIsNextEnabled]);

  const handleStep4Change = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      industry: selectedLabel,
    }));
    setIsNextEnabled(true);
  };

  const handleNoteChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      industryDesc: value,
    }));
    setIsNextEnabled(true);
  };

  if (!step4Data) return <p>Please select an option in Step 3 to continue.</p>;

  return (
    <div>
      <CalculatorInputList
        data={{ options: step4Data }}
        isShow={true}
        title="Something else"
        handleChange={handleChange}
        handleSelect={handleStep4Change}
        formData={formData}
        setFormData={setFormData}
        handleNoteChange={handleNoteChange}
        inputKey="industryDesc"
        selectedOption={allSelectedOptions[3]}
      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep4;
