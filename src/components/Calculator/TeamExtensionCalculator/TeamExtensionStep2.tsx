import { TeamExtensionCalculatorStep2Data } from "@/constants/CalculatorData";
import CalculatorRoleInputField from "@/components/CalculatorRoleInputField";
import { TeamExtensionStepProps } from "@/types/calculatorTypes";

const TeamExtensionStep2 = ({ formData, setFormData }: TeamExtensionStepProps) => {
  const handleSpecialListChange = (label: string, count: number) => {
    setFormData((prev) => {
      const existingList = prev.step2Specialist || [];

      const updatedList = [...existingList];
      const index = updatedList.findIndex((item) => item.label === label);

      if (index !== -1) {
        if (count > 0) {
          updatedList[index] = { label, count }; // update count
        } else {
          updatedList.splice(index, 1); // remove if count is 0
        }
      } else if (count > 0) {
        updatedList.push({ label, count }); // add new entry
      }

      return {
        ...prev,
        step2Specialist: updatedList,
      };
    });
  };

  const handlePositionDescChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      step2SpecialistDesc: value,
    }));
  };

  return (
    <CalculatorRoleInputField
      data={TeamExtensionCalculatorStep2Data[0]}
      isAddSection={true}
      handleChange={handleSpecialListChange}
      formData={formData}
      setFormData={setFormData}
      handlePositionDescChange={handlePositionDescChange}
      inputKey="step2SpecialistDesc"
    />
  );
};

export default TeamExtensionStep2;
