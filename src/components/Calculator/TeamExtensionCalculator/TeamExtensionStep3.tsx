import {  TeamExtensionCalculatorStep3Data } from "@/constants/CalculatorData";
import CalculatorCard from "@/components/CalculatorCard";
import { TeamExtensionStepProps } from "@/types/calculatorTypes";

const TeamExtensionStep3 = ({ setFormData, selectedOption, handleChange }: TeamExtensionStepProps) => {
  const handlProjectDeliveryTeamExtensionChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      needExtension: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorCard
        data={TeamExtensionCalculatorStep3Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handlProjectDeliveryTeamExtensionChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default TeamExtensionStep3;
