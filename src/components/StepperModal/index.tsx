"use client";
import React, { useEffect, useState } from "react";
import styles from "./stepperModal.module.scss";
import { Check, X } from "lucide-react";
import Loader from "../Loader";

const TOTAL_STEPS = 2;

export const StepperModal = ({
  isOpen,
  onClose,
  onSubmit,
  generatedBlogContent,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => Promise<void>;
  generatedBlogContent?: {
    blog: any;
    id: number;
    title: string;
    prefix: string;
    term: string;
    make: string;
    introduction: string;
    technologyJustification: string;
    thoughtwinApproach: string;
    featureHighlights: string[];
    caseStudy: string;
    faq: { question: string; answer: string }[];
    estimatedReadingTime: number;
  };
}) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prefix, setPrefix] = useState("");
  const [term, setTerm] = useState("");
  const [make, setMake] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (generatedBlogContent) {
      setTitle(generatedBlogContent.title || "");
      setDescription(generatedBlogContent.introduction || ""); // or use another section
      setStep(1);
    }
  }, [generatedBlogContent]);

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault(); 
  
    if (prefix.trim() === "" && term.trim() === "" && make.trim() === "") {
      alert("Please enter a title");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const trimmedPrefix = prefix.trim();
      const trimmedTerm = term.trim();
      const trimmedMake = make.trim();
  
      const finalValues = {
        prefix: trimmedPrefix,
        term: trimmedTerm,
        make: trimmedMake,
      };
  
      if (!onSubmit) {
        alert("Submit handler is not defined");
        return;
      }
  
      await onSubmit(finalValues);
  
      setPrefix("");
      setTerm("");
      setMake("");
      setStep(2);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // const handleStep1Submit = async (e: React.FormEvent) => {
  //   if (prefix.trim() !== "" || term.trim() !== "" || make.trim() !== "") {
  //     const trimmedPrefix = prefix.trim();
  //     const trimmedTerm = term.trim();
  //     const trimmedMake = make.trim();
  //     const finalValues = {
  //         prefix: trimmedPrefix,
  //         term: trimmedTerm,
  //         make: trimmedMake,
  //       };
  //     if (onSubmit) {
  //       await onSubmit(finalValues);
  //       setStep(2);
  //     } else {
  //       alert("Submit handler is not defined");
  //       return;
  //     }
  //   } else {
  //     alert("Please enter a title");
  //   }
  // };

  const handleApprove = (blogContent: typeof generatedBlogContent) => {
    if (blogContent) {
      if (onSubmit) {
        onSubmit(blogContent as any);
        setStep(2);
      }
      onClose();
    } else {
      alert("No blog content to approve.");
    }
  };

  const handleRetry = () => {
    setStep(1);
  };

  const handleCancel = () => {
    setPrefix("");
    setTerm("");
    setMake("");
    setStep(1);
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Add Blog</h2>
          <button className={styles.closeBtn} onClick={handleCancel}>
            &times;
          </button>
        </div>

        <div className={styles.stepperContainer}>
          {[...Array(TOTAL_STEPS)].map((_, index) => (
            <div key={index} className={`${styles.stepLine} ${index < step ? styles.active : ""}`} />
          ))}
          <div className={styles.stepCount}>
            Step {step}/{TOTAL_STEPS}
          </div>
        </div>

        {step === 1 && (
          <div className={styles.modalBody}>
            <label>Prefix</label>
            <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} placeholder="Enter Prefix" />
            <label>Term</label>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Enter Term" />
            <label>Make</label>
            <input type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Enter Make" />
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                <X size={16} />
                Cancel
              </button>
              <button className={styles.submitBtn} onClick={handleStep1Submit}>
                {/* <Check size={16} /> */}
                {isSubmitting ? <Loader /> : "Save Blog"}
              </button>
            </div>
          </div>
        )}

        {step === 2 && generatedBlogContent && (
          <div className={styles.modalBody}>
            <div className={styles.scrollContainer}>
              <h3>{generatedBlogContent.title}</h3>
              <p>
                <strong>Introduction:</strong> {generatedBlogContent?.blog?.introduction}
              </p>
              <p>
                <strong>Tech Justification:</strong> {generatedBlogContent?.blog?.technologyJustification}
              </p>
              <p>
                <strong>Our Approach:</strong> {generatedBlogContent?.blog?.thoughtwinApproach}
              </p>
              <p>
                <strong>Features:</strong>
              </p>
              <ul>
                {Array.isArray(generatedBlogContent?.blog?.featureHighlights) &&
                generatedBlogContent?.blog?.featureHighlights.length > 0 ? (
                  <ul>{generatedBlogContent?.blog?.featureHighlights.map((f: any, i: number) => <li key={i}>{f}</li>)}</ul>
                ) : (
                  <p>
                    <em>No features listed.</em>
                  </p>
                )}
              </ul>
              <p>
                <strong>Case Study:</strong> {generatedBlogContent?.blog?.caseStudy}
              </p>
              <p>
                <strong>Estimated Reading Time:</strong> {generatedBlogContent?.blog?.estimatedReadingTime} mins
              </p>
              <div className={styles.modalActions}>
                <button className={styles.cancelBtn} onClick={handleRetry}>
                  Retry
                </button>
                <button className={styles.submitBtn} onClick={() => handleApprove(generatedBlogContent)}>
                  Approve
                </button>
                <button className={styles.cancelBtn} onClick={handleCancel}>
                  <X size={16} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperModal;
