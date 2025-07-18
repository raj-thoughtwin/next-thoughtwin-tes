"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { sendEvent } from "@/lib/ga";
import { CaptchaRef } from "@/types/captchaTYpes";
import { calcularResultFormSchema } from "@/validation/validationSchema";
import Loader from "../Loader";
import GenerateCaptchaInput from "../GenerateCaptchaInput";
import styles from "../../components/Calculator/calculator.module.scss";

interface ResultItem {
  title: string;
  value: string | null;
}

interface CalculatorResultFormProps {
  resultData: ResultItem[];
  formData: any;
  handleBackFromResult: () => void;
}

const CalculatorResultForm = ({
  resultData,
  handleBackFromResult,
  handleSubmit,
  isSubmitting,
}: any) => {
  const captchaRef = useRef<CaptchaRef>(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      term: false,
    },
    validationSchema: calcularResultFormSchema,
    onSubmit: (values) => {
      if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
        return;
      }
      handleSubmit(values);
    },
  });

  const customFields = [
    { title: "What's your industry?", key: "industryDesc" },
    { title: "Your company name?", key: "appFeatureDesc" },
    { title: "Additional Information", key: "additionalInfo" },
  ];
  return (
    <section className={styles.CalculatorstepsArea}>
      <div className="container">
        <div className={styles.resultBox}>
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className={styles.resultLeft}>
                <h4>Result</h4>
                <ul>
                  {resultData?.map((item: any, index: number) => (
                    <li key={index}>
                      <h5>
                        {index + 1}.
                        <span className={styles.result_p}>{item?.title}</span>
                      </h5>

                      {/* 1. String */}
                      {typeof item?.value === "string" && (
                        <span
                          className={styles.paddingLeft}
                          style={{ color: "#7e7e7e" }}
                        >
                          {item.value}
                        </span>
                      )}
                      {typeof item?.desc === "string" &&
                        item.desc.trim() !== "" && (
                          <h5>
                            Description :
                            <span style={{ marginLeft: "-12px" }}>
                              {item.desc}
                            </span>
                          </h5>
                        )}

                      {/* 2. Array of objects (like specialists list) */}
                      {Array.isArray(item?.value) && (
                        <ul className={styles.subList}>
                          {item.value.map((subItem: any, idx: number) => (
                            <li key={idx} className={styles.paddingLeft}>
                              {subItem.label} ({subItem.count})
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* 3. Object (like technologies) */}
                      {typeof item?.value === "object" &&
                        !Array.isArray(item?.value) && (
                          <div className={styles.techTree}>
                            {Object.entries(item.value).map(
                              ([category, levels]: any) => (
                                <div key={category}>
                                  <strong>
                                    {category.charAt(0).toUpperCase() +
                                      category.slice(1)}
                                  </strong>
                                  <ul className={styles.subList}>
                                    {levels.map(
                                      (levelObj: any, levelIdx: number) => {
                                        const level = Object.keys(levelObj)[0];
                                        const skills = levelObj[level];
                                        return (
                                          <li
                                            key={levelIdx}
                                            className="d-flex align-items-baseline"
                                          >
                                            <div
                                              className={`${styles.levelLabel} pe-2`}
                                            >
                                              {level}:
                                            </div>
                                            <div
                                              className={`${styles.skillList} p-0`}
                                            >
                                              {skills.map(
                                                (
                                                  skill: any,
                                                  skillIdx: number
                                                ) => (
                                                  <span
                                                    key={skillIdx}
                                                    className={styles.skillItem}
                                                  >
                                                    {skill.label} ({skill.count}
                                                    )
                                                  </span>
                                                )
                                              )}
                                            </div>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className={styles.resultrRight}>
                <h2>Congratulations! There's only one step left.</h2>
                <p>
                  Enter your work email, and we'll send you an estimate as soon
                  as possible.
                </p>

                <form className={styles.formBox} onSubmit={formik.handleSubmit}>
                  <div className={styles.InputBox}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <span className="text-danger">{formik.errors.name}</span>
                    )}
                  </div>

                  <div className={styles.InputBox}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="text-danger">{formik.errors.email}</span>
                    )}
                  </div>

                  <div className="col-md-12 mt-2">
                    <GenerateCaptchaInput
                      ref={captchaRef}
                      label="Please solve this"
                    />
                  </div>

                  <div className={styles.tacbox}>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="term"
                      checked={formik.values.term}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="checkbox">
                      I agree to these{" "}
                      <Link
                        href="/privacy-policy"
                        aria-label="Terms and Condition"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                    <br />
                    {formik.touched.term && formik.errors.term && (
                      <span className="text-danger">{formik.errors.term}</span>
                    )}
                  </div>
                  <div className={styles.btnBox}>
                    <button
                      type="button"
                      className={styles.prevBtn}
                      onClick={handleBackFromResult}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={styles.nextBtn}
                      onClick={() => {
                        sendEvent({
                          action: "calculator_submit_click",
                          category: "cilck",
                          label: "Calcular Result Form Submit Button",
                        });
                      }}
                    >
                      {isSubmitting ?
                        <Loader />
                      : "Get my calculation"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorResultForm;
