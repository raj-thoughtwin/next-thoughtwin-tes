import { MvpCalculatorStep7Data } from "@/constants/CalculatorData";
import CalculatorInputList from "@/components/CalculatorInputList";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep7: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handleCloudPlateformChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      cloudPlateform: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorInputList
        data={MvpCalculatorStep7Data[0]}
        isShow={false}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handleCloudPlateformChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep7;
