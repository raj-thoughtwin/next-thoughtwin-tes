import CalculatorCard from "@/components/CalculatorCard";
import { CalculatorStep6Data } from "@/constants/CalculatorData";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep10: React.FC<MvpDevelopmentCalculatorStepProps> = ({ setFormData, selectedOption, handleChange }) => {
  const handlprojectDeliveryChange = (selectedLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      projectDelivery: selectedLabel,
    }));
  };

  return (
    <div>
      <CalculatorCard
        data={CalculatorStep6Data[0]}
        handleChange={handleChange}
        selectedOption={selectedOption}
        handleSelect={handlprojectDeliveryChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep10;
