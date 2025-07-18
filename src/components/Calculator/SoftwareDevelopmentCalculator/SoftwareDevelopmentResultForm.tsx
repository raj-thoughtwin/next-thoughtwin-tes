import React from "react";

import { getStepTitlesSoftwareCalculator } from "@/constants/CalculatorResultFormData";
import CalculatorResultForm from "@/components/CalculatorResultForm";

interface SoftwareDevelopmentFormData {
  industry?: string;
  platformType?: string;
  releaseProjectDate?: string;
  screenSize?: string;
  customDesign?: string;
  cloudPlateform?: string;
  appFeature?: string[];
  additionalInfo?: string;
  projectDelivery?: string;
  [key: string]: any; 
}

interface SoftwareDevelopmentResultFormProps {
  formData: SoftwareDevelopmentFormData;
  handleBackFromResult: () => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
}

const SoftwareDevelopmentResultForm = ({ formData, handleBackFromResult, handleSubmit, isSubmitting }: SoftwareDevelopmentResultFormProps) => {
  const stepTitlesSoftwareCalculator = getStepTitlesSoftwareCalculator(formData);

  return (
    <div>
      <CalculatorResultForm
        resultData={stepTitlesSoftwareCalculator}
        handleBackFromResult={handleBackFromResult}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        formData={formData}
      />
    </div>
  );
};

export default SoftwareDevelopmentResultForm;
