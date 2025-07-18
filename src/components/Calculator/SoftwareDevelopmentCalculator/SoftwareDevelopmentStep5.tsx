"use client";

import React, { useEffect, useState } from "react";
import { ProductDevelopmentCostCalculator } from "@/constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { SoftwareDevelopmentCalculatorStepNewProps, StepOption } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep5: React.FC<SoftwareDevelopmentCalculatorStepNewProps> = ({
  formData,
  setFormData,
  allSelectedOptions,
  handleChange,
  setIsNextEnabled,
}) => {
  const [step5Data, setStep5Data] = useState<StepOption[] | null>(null);
  const step4Selected = allSelectedOptions[3];

  useEffect(() => {
    const step4Match = ProductDevelopmentCostCalculator.find((item) => item.title === step4Selected);

    setStep5Data(step4Match?.options || null);
    setIsNextEnabled(false);
  }, [step4Selected, setIsNextEnabled]);

  const handleIndustryChange = (value: string | string[]) => {
    const val = Array.isArray(value) ? value[0] : value;
    setFormData((prev) => {
      const alreadyExists = (prev.solutionTypes ?? []).includes(val);
      const updatedSolutions = alreadyExists
        ? (prev.solutionTypes ?? []).filter((item) => item !== val)
        : [...(prev.solutionTypes ?? []), val];

      return {
        ...prev,
        solutionTypes: updatedSolutions,
      };
    });
    setIsNextEnabled(true);
  };

  const handleNoteSolutionChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      solutionTypesDesc: value,
    }));
    setIsNextEnabled(true);
  };

  if (!step5Data) return <p>Please complete the previous step to continue.</p>;

  return (
    <div>
      <CalculatorInputList
        data={{ options: step5Data }}
        isShow={true}
        title="Something else"
        handleChange={handleChange}
        handleSelect={handleIndustryChange}
        formData={formData}
        setFormData={setFormData}
        handleNoteChange={handleNoteSolutionChange}
        inputKey="solutionTypesDesc"
        // selectedOption={allSelectedOptions[4]}
        selectedOption={formData.solutionTypes}
        isMultiSelect={true}
      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep5;
