"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useScrollToTop } from "@/hook/useScrollToTop";
import { CoustomStepper as Stepper } from "@/components";
import { TeamExtensionTitleMap } from "@/constants/CalculatorResultFormData";
import TeamExtensionStep1 from "@/components/Calculator/TeamExtensionCalculator/TeamExtensionStep1";
import TeamExtensionStep2 from "@/components/Calculator/TeamExtensionCalculator/TeamExtensionStep2";
import TeamExtensionStep3 from "@/components/Calculator/TeamExtensionCalculator/TeamExtensionStep3";
import styles from "../SoftwareDevelopmentCalculator/softwareDevelopment.module.scss";

const TeamExtensionCalculator = () => {
  useScrollToTop();
  const steps = [TeamExtensionStep1, TeamExtensionStep2, TeamExtensionStep3];

  const [currentStep, setCurrentStep] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({
    step1Technology: "",
    step2Specialist: "",
    needExtension: "",
    step2SpecialistDesc: "",
    name: "",
    email: "",
    terms: "",
  });

  const title = TeamExtensionTitleMap[currentStep];

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

  const teamExtensionHandleSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);
      const payload = {
        step1Technology: formData.step1Technology || [],
        step2Specialist: formData.step2Specialist || [],
        step2SpecialistDesc: formData.step2SpecialistDesc || "",
        needExtension: formData.needExtension || "",
        name: values.name || "",
        email: values.email || "",
        terms: values.term || false,
      };

      const response = await fetch("/api/team-extension", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Your application has been submitted successfully!");
      }
      setIsSubmitting(false);
    } catch (err: any) {
      setIsSubmitting(false);
      console.error("Submit error:", err);
      toast.error(err?.message || "Something went wrong!");
    }
  };

  return (
    <section className={`${styles.CalculatorstepsArea}`}>
      <div className="container">
        <div className={styles.CalculatorAreaHeading}>
          <h2>Team Extension Cost Calculator</h2>
          {!isFinish && <h3 className={styles.CalculatorAreaSubHeading}>{title}</h3>}
        </div>
      </div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={teamExtensionHandleSubmit}
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

export default TeamExtensionCalculator;
