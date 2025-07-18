"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { CoustomStepper as Stepper } from "@/components";
import { useScrollToTop } from "@/hook/useScrollToTop";
import { MvpTitleMap } from "@/constants/CalculatorResultFormData";
import MvpDevelopmentCalculatorStep1 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep1";
import MvpDevelopmentCalculatorStep10 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep10";
import MvpDevelopmentCalculatorStep2 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep2";
import MvpDevelopmentCalculatorStep3 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep3";
import MvpDevelopmentCalculatorStep4 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep4";
import MvpDevelopmentCalculatorStep5 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep5";
import MvpDevelopmentCalculatorStep6 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep6";
import MvpDevelopmentCalculatorStep8 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep8";
import MvpDevelopmentCalculatorStep7 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep7";
import MvpDevelopmentCalculatorStep9 from "@/components/Calculator/MvpDevelopmentCalculator/MvpDevelopmentStep9";
import styles from "../SoftwareDevelopmentCalculator/softwareDevelopment.module.scss";

const MVPDevelopmentCalculator = () => {
  useScrollToTop();
  const steps = [
    MvpDevelopmentCalculatorStep1,
    MvpDevelopmentCalculatorStep2,
    MvpDevelopmentCalculatorStep3,
    MvpDevelopmentCalculatorStep4,
    MvpDevelopmentCalculatorStep5,
    MvpDevelopmentCalculatorStep6,
    MvpDevelopmentCalculatorStep7,
    MvpDevelopmentCalculatorStep8,
    MvpDevelopmentCalculatorStep9,
    MvpDevelopmentCalculatorStep10,
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({
    businessGoal: "",
    releaseProjectDate: "",
    platformType: "",
    industry: "",
    screenSize: "",
    customDesign: "",
    cloudPlateform: "",
    appFeature: "",
    appFeatureDesc: "",
    industryDesc: "",
    additionalInfo: "",
    projectDelivery: "",
    term: false,
    name: "",
    email: "",
  });

  const title = MvpTitleMap[currentStep];

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

  const mvpHandleSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);
      const payload = {
        businessGoal: formData.businessGoal || "",
        releaseProjectDate: formData.releaseProjectDate || "",
        platformType: formData.platformType || "",
        industry: formData.industry || "",
        industryDesc: formData.industryDesc || "",
        screenSize: formData.screenSize || "",
        customDesign: formData.customDesign || "",
        cloudPlateform: formData.cloudPlateform || "",
        appFeature: Array.isArray(formData?.appFeature)
          ? formData.appFeature
          : typeof formData?.appFeature === "string"
            ? formData.appFeature.split(",").map((item: string) => item.trim())
            : [],
        appFeatureDesc: formData.appFeatureDesc || "",
        additionalInfo: formData.additionalInfo || "",
        projectDelivery: formData.projectDelivery || "",
        name: values.name || "",
        email: values.email || "",
        term: values.term || false,
      };
      const data: any = await fetch("/api/mvp-develoment-api", {
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
    <section className={`${styles.CalculatorstepsArea} hello`}>
      <div className="container">
        <div className={styles.CalculatorAreaHeading}>
          <h2>MVP Development Cost Calculator</h2>
          {!isFinish && <h3 className={styles.CalculatorAreaSubHeading}>{title}</h3>}
        </div>
      </div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={mvpHandleSubmit}
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

export default MVPDevelopmentCalculator;
