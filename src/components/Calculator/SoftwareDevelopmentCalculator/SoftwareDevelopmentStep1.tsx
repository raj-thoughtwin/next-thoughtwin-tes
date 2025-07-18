
"use client";
import React, { useEffect } from "react";
import CalculatorCard from "@/components/CalculatorCard";
import { CalculatorStep1Data } from "../../../constants/CalculatorData";
import { SoftwareDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep1: React.FC<SoftwareDevelopmentCalculatorStepProps> = ({
  setFormData,
  selectedOption,
  handleChange,
  setIsNextEnabled, 
}) => {
  const handleWhatToDoChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      whatToDo: selectedLabel,
    }));
    setIsNextEnabled(true); 
  };

  useEffect(() => {
    if (!selectedOption) {
      setIsNextEnabled(false);
    }
  }, [selectedOption, setIsNextEnabled]);

  return (
    <div>
      <CalculatorCard
        data={CalculatorStep1Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleWhatToDoChange}
      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep1;
