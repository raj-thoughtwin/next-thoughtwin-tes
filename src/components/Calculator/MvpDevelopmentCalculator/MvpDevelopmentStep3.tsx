"use client";

import React from "react";
import { MVPCalculatorStep3Data } from "@/constants/CalculatorData";
import CalculatorColumnCard from "@/components/CalculatorColumnCard";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep3: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handlreleaseProjecChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      releaseProjectDate: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorColumnCard
        data={MVPCalculatorStep3Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handlreleaseProjecChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep3;
