"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useScrollToTop } from "@/hook/useScrollToTop";
import SoftwareDevelopmentCalculatorStep1 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep1";
import SoftwareDevelopmentCalculatorStep2 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep2";
import { SoftwareDevelopmentTitleMap } from "@/constants/CalculatorResultFormData";
import SoftwareDevelopmentCalculatorStep3 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep3";
import SoftwareDevelopmentCalculatorStep4 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep4";
import SoftwareDevelopmentCalculatorStep5 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep5";
import SoftwareDevelopmentCalculatorStep6 from "@/components/Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentStep6";
import { CoustomStepper as Stepper } from "@/components";
import styles from "./softwareDevelopment.module.scss";

const SoftwareDevelopmentCalculator = () => {
  useScrollToTop();
  const steps = [
    SoftwareDevelopmentCalculatorStep1,
    SoftwareDevelopmentCalculatorStep2,
    SoftwareDevelopmentCalculatorStep3,
    SoftwareDevelopmentCalculatorStep4,
    SoftwareDevelopmentCalculatorStep5,
    SoftwareDevelopmentCalculatorStep6,
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({
    whatToDo: "",
    alreadyHave: "",
    platformType: "",
    industry: "",
    industryDesc: "",
    solutionTypes: "",
    projectDelivery: "",
    name: "",
    email: "",
    terms: "",
  });

  const title = SoftwareDevelopmentTitleMap[currentStep];

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      setIsFinish(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleBackFromResult = () => {
    setIsFinish(false);
    setCurrentStep(steps.length - 1);
  };

  const softwareDevelopmentHandleSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);
      const payload = {
        whatToDo: formData.whatToDo || "",
        alreadyHave: formData.alreadyHave || "",
        platformType: formData.platformType || "",
        industry: formData.industry || "",
        industryDesc: formData.industryDesc || "",
        solutionTypes: Array.isArray(formData?.solutionTypes)
          ? formData.solutionTypes
          : typeof formData?.solutionTypes === "string"
            ? formData.solutionTypes.split(",").map((item: string) => item.trim())
            : [],
        solutionTypesDesc: formData.solutionTypesDesc || "",
        projectDelivery: formData.projectDelivery || [],
        name: values.name || "",
        email: values.email || "",
        terms: values.term || false,
      };
      const data: any = await fetch("/api/software-development", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (data.ok) {
        setIsSuccess(true);
        toast.success(data.message || "Your application has been submitted successfully!");
      }
      setIsSubmitting(false);
    } catch (err: any) {
      setIsSubmitting(false);
      console.error("Submit error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong!.");
    }
  };

  return (
    <section className={`${styles.CalculatorstepsArea}`}>
      <div className="container">
        <div className={styles.CalculatorAreaHeading}>
          <h2>Product Development Cost Calculator</h2>
          {!isFinish && <h3 className={styles.CalculatorAreaSubHeading}>{formData?.industry && formData?.industry } {' '}{title}</h3>}
        </div>
      </div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={softwareDevelopmentHandleSubmit}
        formData={formData}
        setFormData={setFormData}
        setIsFinish={setIsFinish}
        handleBackFromResult={handleBackFromResult}
        isFinish={isFinish}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
      />
    </section>
  );
};

export default SoftwareDevelopmentCalculator;
