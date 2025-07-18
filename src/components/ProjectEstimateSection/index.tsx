"use client";
import React, { useState } from "react";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { POST } from "@/utility/fetcher";
import { ServiceFormInterface, ServiceFormResponse } from "@/types/types";
import { API_ENDPOINT } from "@/constants/api.routes";
import { sendEvent } from "@/lib/ga";
import ServiceForm from "../ServiceForm";
import styles from "./ProjectEstimateSection.module.scss";

type ProjectEstimateProps = {
  validationSchema?: any;
  projectEstimateSectionData: {
    title: string;
    subTitle: string;
    description: string;
  }[];
};

const ProjectEstimateSection = ({ projectEstimateSectionData }: ProjectEstimateProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: ServiceFormInterface, formikHelpers: FormikHelpers<ServiceFormInterface>) => {
    sendEvent({
      action: "submit_click",
      category: "engagement",
      label: "Submit Button",
    });
    try {
      const { resetForm } = formikHelpers;
      setIsSubmitting(true);
      const payload = {
        email: values.email,
        message: values.message,
        phone_number: values.phone_number,
        fname: values.fname,
        lname: values.lname,
      };

      const data = await POST<ServiceFormResponse>(API_ENDPOINT.SERVICE_FORM, payload);
      if (!data.success) {
        toast.error("Failed to submit application.");
        return;
      } else {
        resetForm();
        toast.success(data.message || "Your application has been submitted successfully!");
      }

      setIsSubmitting(false);
    } catch (err: any) {
      setIsSubmitting(false);
      console.error("Submit error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      {projectEstimateSectionData.map((data, index) => (
        <section className={styles.sec_project_istimate} id="Estimate" key={index}>
          <div className={styles.blockchain_container}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                  <div className={styles.project_istimate_text}>
                    <h5>{data.title}</h5>
                    <h2>
                      {data.subTitle.split("Project")[0]}
                  
                      Project {data.subTitle.split("Project")[1]}
                    </h2>
                    <p>{data.description}</p>
                    <a href="/pricing-calculator">Request an Estimation</a>
                  </div>
                </div>
                {/* <div className="col-lg-5 col-md-6">
                  <div className={styles.pro_estimate_form}>
                    <ServiceForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectEstimateSection;
