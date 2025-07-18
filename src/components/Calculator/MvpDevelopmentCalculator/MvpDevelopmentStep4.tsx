import { MvpCalculatorStep4Data } from "@/constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep4: React.FC<MvpDevelopmentCalculatorStepProps> = ({ formData, setFormData, selectedOption, handleChange }) => {
  const handlePlatformChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      platformType: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorInputList
        data={MvpCalculatorStep4Data[0]}
        isShow={false}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handlePlatformChange}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep4;
