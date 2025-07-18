import CalculatorInputList from "@/components/CalculatorInputList";
import { MvpCalculatorStep2Data } from "@/constants/CalculatorData";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";
import React from "react";

const MvpDevelopmentCalculatorStep2: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handleBusinessChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      businessGoal: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorInputList
        data={MvpCalculatorStep2Data[0]}
        isShow={false}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleBusinessChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep2;
