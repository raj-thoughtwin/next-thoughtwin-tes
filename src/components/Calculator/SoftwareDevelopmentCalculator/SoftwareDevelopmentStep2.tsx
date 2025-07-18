
"use client";
import React, { useEffect, useState } from "react";
import { ProductDevelopmentCostCalculator } from "../../../constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { SoftwareDevelopmentCalculatorStepNewProps, StepDataItem } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep2: React.FC<SoftwareDevelopmentCalculatorStepNewProps> = ({
  setFormData,
  allSelectedOptions, 
  handleChange,
  setIsNextEnabled,
}) => {
  const [step2Data, setStep2Data] = useState<StepDataItem | null>(null);
  const step1SelectedOption = allSelectedOptions[0];

  useEffect(() => {
    const matchedData = ProductDevelopmentCostCalculator.find(
      (item) => item.title === step1SelectedOption
    );
    setStep2Data(matchedData || null);
    setIsNextEnabled(false);
  }, [step1SelectedOption, setIsNextEnabled]);
  

  const handleStep2Change = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      alreadyHave: selectedLabel,
    }));
    setIsNextEnabled(true);
  };

  if (!step2Data) return <p>Please select an option in Step 1 to continue.</p>;

  return (
    <div>
      <CalculatorInputList
        data={step2Data}
        handleChange={handleChange}
        handleSelect={handleStep2Change}
        setFormData={setFormData}
        selectedOption={allSelectedOptions[1]} 

      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep2;
