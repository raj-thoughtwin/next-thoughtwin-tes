"use client";

import React from "react";
import { MVPCalculatorStep5Data } from "@/constants/CalculatorData";
import CalculatorColumnCard from "@/components/CalculatorColumnCard";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep5: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handleScreenChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      screenSize: selectedLabel,
    }));
  };
  return (
    <div>
      <CalculatorColumnCard
        data={MVPCalculatorStep5Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleScreenChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep5;
