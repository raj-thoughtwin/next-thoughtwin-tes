"use client";
import React from "react";
import { MVPCalculatorStep6Data } from "@/constants/CalculatorData";
import CalculatorColumnCard from "@/components/CalculatorColumnCard";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep6: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handleCustomDesignChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      customDesign: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorColumnCard
        data={MVPCalculatorStep6Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleCustomDesignChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep6;
