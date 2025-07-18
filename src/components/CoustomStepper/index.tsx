"use client";
import React, { useState, FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendEvent } from "@/lib/ga";
import MvpDevelopmentCalculatorResult from "../Calculator/MvpDevelopmentCalculator/MvpDevelopmentResult";
import CalCulatorSucessPopup from "../CalculatorSuccessPopup";
import TeamExtensionResultForm from "../Calculator/TeamExtensionCalculator/TeamExtensionResult";
import SoftwareDevelopmentResultForm from "../Calculator/SoftwareDevelopmentCalculator/SoftwareDevelopmentResultForm";
import styles from "./coustomStepper.module.scss";
import Link from "next/link";
import HardToChoose from "../Hardtochoose";

const Stepper = ({
  steps,
  currentStep,
  handleNext,
  handleBack,
  handleSubmit,
  formData,
  setFormData,
  handleBackFromResult,
  isFinish,
  isSubmitting,
  isSuccess,
}: any) => {
  const totalSteps = steps.length;
  const pathname = usePathname();

  const [selectedOptions, setSelectedOptions] = useState<string[]>(() => {
    // Rehydrate from formData
    const defaultOptions = Array(totalSteps).fill("");
    if (pathname.includes("team-extension-calculator")) {
      defaultOptions[0] = formData.step1Technology || "";
      defaultOptions[1] = formData.step2Specialist || "";
      defaultOptions[2] = formData.needExtension || "";
    }
    return defaultOptions;
  });

  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const setSelectedOptionForStep = (stepIndex: number, value: string) => {
    const updated = [...selectedOptions];
    updated[stepIndex] = value;
    setSelectedOptions(updated);
    setIsNextEnabled(true);
  };

  const isButtonDisabled = (): boolean => {
    const isTeamExtension = pathname.includes("/team-extension-calculator");
    const isMvpDevelopment = pathname.includes("/mvp-development-calculator");
    const isSoftwareDevelopment = pathname.includes(
      "/software-development-calculator"
    );

    if (isTeamExtension) {
      switch (currentStep) {
        case 0:
          const techData = formData?.step1Technology || {};
          for (const tab in techData) {
            const groups = techData[tab];
            for (const group of groups) {
              const key = Object.keys(group)[0];
              const roles = group[key] || [];
              for (const role of roles) {
                if (role.count > 0) return false;
              }
            }
          }
          return true;
        case 1:
          const disable =
            !formData?.step2SpecialistDesc?.trim() &&
            (!Array.isArray(formData?.step2Specialist) ||
              formData.step2Specialist.length === 0);
          return disable;
        default:
          return !selectedOptions[currentStep];
      }
    }

    if (isSoftwareDevelopment) {
      const stepKeys = [
        "whatToDo",
        "alreadyHave",
        "platformType",
        "industry",
        "solutionTypes",
        "projectDelivery",
      ];

      const currentKey = stepKeys[currentStep];
      const value = formData?.[currentKey];

      if (currentKey === "industry") {
        return !formData?.industryDesc && !value;
      }

      if (currentKey === "solutionTypes") {
        return !formData?.solutionTypesDesc && !value;
      }

      return !value || (typeof value === "string" && value.trim() === "");
    }

    if (isMvpDevelopment) {
      const stepKeys = [
        "industry",
        "businessGoal",
        "releaseProjectDate",
        "platformType",
        "screenSize",
        "customDesign",
        "cloudPlateform",
        "appFeature",
        "additionalInfo",
        "projectDelivery",
      ];

      const currentKey = stepKeys[currentStep];
      const value = formData?.[currentKey];

      if (currentKey === "industry") {
        return !formData?.industryDesc && !value;
      }

      if (currentKey === "appFeature") {
        return !formData?.appFeatureDesc && !value;
      }

      return !value || (typeof value === "string" && value.trim() === "");
    }
    return !selectedOptions[currentStep];
  };

  return (
    <>
      {!isFinish ?
        <>
          <div className="container">
            <div className={styles.CalculatorAreaSubHeading}>
              <div className={styles.stepper_container}>
                {[...Array(totalSteps)].map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.step} ${i <= currentStep ? styles.activeStep : ""}`}
                  />
                ))}
              </div>
              <p className={styles.steps_para}>
                Step {currentStep + 1} / {totalSteps}
              </p>
            </div>

            <div className=" pt-4">
              {steps.map((StepComponent: any, idx: any) => (
                <div
                  key={idx}
                  style={{ display: idx === currentStep ? "block" : "none" }}
                >
                  <StepComponent
                    formData={formData}
                    setIsNextEnabled={setIsNextEnabled}
                    setFormData={setFormData}
                    selectedOption={selectedOptions[idx]}
                    allSelectedOptions={selectedOptions}
                    handleChange={(val: string) =>
                      setSelectedOptionForStep(idx, val)
                    }
                  />
                </div>
              ))}
            </div>

            <div className={styles.btnBox}>
              {currentStep > 0 ?
                <button
                  onClick={() => {
                    handleBack();
                    sendEvent({
                      action: "calculator_back_click",
                      category: "cilck",
                      label: "Steper Back Button",
                    });
                  }}
                  className={styles.prevBtn}
                >
                  Back
                </button>
              : <Link
                  href="/pricing-calculator"
                  aria-label="Pricing Calculator"
                >
                  <button type="button" className={styles.prevBtn}>
                    Back
                  </button>
                </Link>
              }
              {currentStep < steps.length ?
                <button
                  onClick={() => {
                    handleNext();
                    sendEvent({
                      action: "calculator_next_click",
                      category: "cilck",
                      label: "Steper Next Button",
                    });
                  }}
                  className={styles.nextBtn}
                  disabled={isButtonDisabled()}
                  style={{
                    opacity: isButtonDisabled() ? 0.6 : 1,
                    cursor: isButtonDisabled() ? "not-allowed" : "pointer",
                  }}
                >
                  {currentStep === steps.length - 1 ? "Finish" : "Next Step"}
                </button>
              : null}
            </div>
          </div>
          {/* <HardToChoose /> */}
        </>
      : isSuccess ?
        <CalCulatorSucessPopup />
      : pathname === "/pricing-calculator/team-extension-calculator" ?
        <TeamExtensionResultForm
          handleBackFromResult={handleBackFromResult}
          handleSubmit={handleSubmit}
          formData={formData}
          isSubmitting={isSubmitting}
        />
      : pathname === "/pricing-calculator/software-development-calculator" ?
        <SoftwareDevelopmentResultForm
          handleBackFromResult={handleBackFromResult}
          handleSubmit={handleSubmit}
          formData={formData}
          isSubmitting={isSubmitting}
        />
      : <MvpDevelopmentCalculatorResult
          handleBackFromResult={handleBackFromResult}
          handleSubmit={handleSubmit}
          formData={formData}
          isSubmitting={isSubmitting}
        />
      }
    </>
  );
};

export default Stepper;
