import { CalculatorStep4Data } from "@/constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep1: React.FC<MvpDevelopmentCalculatorStepProps> = ({ formData, setFormData, selectedOption, handleChange } ) => {
  const handleIndustryChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      industry: selectedLabel,
    }));
  };

  const handleNoteChange = (value:string) => {
    setFormData((prev) => ({
      ...prev,
      industryDesc: value,
    }));
  };

  return (
    <div>
      <CalculatorInputList
        data={CalculatorStep4Data[0]}
        isShow={true}
        title="Other - custom"
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleIndustryChange}
        formData={formData}
        setFormData={setFormData}
        handleNoteChange={handleNoteChange}
        inputKey="industryDesc"
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep1;
