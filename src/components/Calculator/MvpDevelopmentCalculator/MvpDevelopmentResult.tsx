import { getStepTitlesMvpCalculator } from "@/constants/CalculatorResultFormData";
import CalculatorResultForm from "@/components/CalculatorResultForm";

interface MvpDevelopmentCalculatorResultProps {
  formData: any; // replace `any` with your specific formData type if available
  handleBackFromResult: () => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
}

const MvpDevelopmentCalculatorResult = ({ formData, handleBackFromResult, handleSubmit, isSubmitting }: MvpDevelopmentCalculatorResultProps) => {
  const stepTitlesMvpCalculator = getStepTitlesMvpCalculator(formData);

  return (
    <div>
      <CalculatorResultForm
        resultData={stepTitlesMvpCalculator}
        handleBackFromResult={handleBackFromResult}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        formData={formData}
      />
    </div>
  );
};

export default MvpDevelopmentCalculatorResult;
