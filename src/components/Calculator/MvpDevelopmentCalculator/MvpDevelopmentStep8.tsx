import CalculatorInputList from "@/components/CalculatorInputList";
import { MvpCalculatorStep8Data } from "@/constants/CalculatorData";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep8: React.FC<MvpDevelopmentCalculatorStepProps> = ({ formData, setFormData, selectedOption, handleChange }) => {
  const handleAppFeatureChange = (value: string | string[]) => {
    const val = Array.isArray(value) ? value[0] : value;
    setFormData((prev) => {
      const alreadyExists = prev.appFeature.includes(val);
      const updatedAppFeature = alreadyExists
        ? prev.appFeature.filter((item: string) => item !== val) // remove
        : [...prev.appFeature, val]; // add

      return {
        ...prev,
        appFeature: updatedAppFeature,
      };
    });
  };

  const handleAppFeatureDescChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      appFeatureDesc: value,
    }));
  };

  return (
    <div>
      <CalculatorInputList
        data={MvpCalculatorStep8Data[0]}
        isShow={true}
        title="Other - custom"
        handleChange={handleChange}
        // selectedOption={selectedOption}
        selectedOption={formData.appFeature}
        handleSelect={handleAppFeatureChange}
        setFormData={setFormData}
        handleNoteChange={handleAppFeatureDescChange}
        inputKey="appFeatureDesc"
        formData={formData}
        isMultiSelect={true}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorStep8;
