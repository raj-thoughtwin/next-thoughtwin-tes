"use client";

import React, { useEffect } from "react";
import { Step6Data } from "@/constants/CalculatorData";
import CalculatorCard from "@/components/CalculatorCard";
import { SoftwareDevelopmentCalculatorStepNewProps } from "@/types/calculatorTypes";

const SoftwareDevelopmentCalculatorStep6: React.FC<SoftwareDevelopmentCalculatorStepNewProps> = ({
  formData,
  setFormData,
  selectedOption,
  handleChange,
  setIsNextEnabled,
}) => {
  useEffect(() => {
    setIsNextEnabled(false);
  }, [setIsNextEnabled]);

  const handleProjectDeliveryChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      projectDelivery: selectedLabel,
    }));
    setIsNextEnabled(true);
  };

  const handleNoteChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectDeliveryDesc: value,
    }));
    setIsNextEnabled(true);
  };

  return (
    <div>
      <CalculatorCard
        data={{ options: Step6Data.flatMap((item) => item.options) }}
        isShow={true}
        title="Choose Delivery Timeline"
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleProjectDeliveryChange}
        handleNoteChange={handleNoteChange}
        inputKey="projectDeliveryDesc"
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default SoftwareDevelopmentCalculatorStep6;
