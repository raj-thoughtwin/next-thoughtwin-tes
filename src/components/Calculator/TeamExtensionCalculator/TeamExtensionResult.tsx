import { renderResult } from "@/constants/getTeamExtensionResultData";
import CalculatorResultForm from "@/components/CalculatorResultForm";

interface TeamExtensionResultFormProps {
  formData: {
    step1Technology: string[] | string;
    step2Specialist: string[] | string;
    needExtension: string;
    [key: string]: any;
  };
  handleBackFromResult: () => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
}

const TeamExtensionResultForm = ({ formData, handleBackFromResult, handleSubmit, isSubmitting }: TeamExtensionResultFormProps) => {
  const transformedData = [
    {
      title: "Please choose technologies",
      value: formData.step1Technology,
    },
    {
      title: "Do you need other specialists?",
      value: formData.step2Specialist,
      desc: formData?.step2SpecialistDesc,
    },
    {
      title: "How fast do you need an extension?",
      value: formData.needExtension,
    },
  ];

  const stepTitlesTeamExtensionCalculator = renderResult(transformedData);

  return (
    <div>
      <CalculatorResultForm
        resultData={stepTitlesTeamExtensionCalculator}
        handleBackFromResult={handleBackFromResult}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        formData={formData}
      />
    </div>
  );
};

export default TeamExtensionResultForm;
