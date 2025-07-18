"use client";

import { useState, useRef  } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { applyNowValidationSchema } from "@/validation/validationSchema";
import GenerateCaptchaInput from "../GenerateCaptchaInput";
import { sendEvent } from "@/lib/ga";
import { CaptchaRef } from "@/types/captchaTYpes";
import styles from "./applynowmodal.module.scss";
import Loader from "../Loader";

interface ApplyModalProps {
  closeModal: () => void;
  show: boolean;
  title: string;
}

export default function ApplyNowModal({ closeModal, show, title }: ApplyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const captchaRef = useRef<CaptchaRef>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    currentLocation: "",
    relevantExperience: "",
    keySkills: "",
    noticePeriod: "",
    reasonForJobChange: "",
    resume: null as File | null,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      currentLocation: "",
      relevantExperience: "",
      keySkills: "",
      noticePeriod: "",
      reasonForJobChange: "",

      resume: null,
    },
    validationSchema: applyNowValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
        return;
      }
      sendEvent({
        action: "submit_click",
        category: "engagement",
        label: "Submit Button",
      });
      try {
        setIsSubmitting(true);
        const formDataToSend = new FormData();
        Object.entries(values).forEach(([key, val]) => {
          formDataToSend.append(key, val as any);
        });
        const response: any = await fetch("/api/apply-job", {
          method: "POST",
          body: formDataToSend,
        });
        if (!response.ok) {
          toast.error("Failed to submit application.");
          return;
        } else {
          toast.success("Your application has been submitted successfully!");
          resetForm();
          closeModal();
        }

        setIsSubmitting(false);
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error submitting form:", error);
        toast.error("Something went wrong while submitting.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Optional: Handle file input change to update state (for validation or UI feedback)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  return (
    <Modal show={show} onHide={closeModal} centered className="set_modal">
      <Modal.Header closeButton className="mb-4">
        <Modal.Title id="applyModalLabel">
          <h5>{title}</h5>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="row" onSubmit={formik.handleSubmit}>
          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="name">Your Name</label>
              <Form.Control
                name="name"
                type="text"
                className="form-control"
                aria-label="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.name && formik.touched.name}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="email">
                Your Email<span className="required-icon">*</span>
              </label>
              <Form.Control
                name="email"
                type="email"
                className="form-control"
                aria-label="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.email && formik.touched.email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <Form.Control
                name="phoneNumber"
                type="text"
                className="form-control"
                aria-label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="location">
                Current Location<span className="required-icon">*</span>
              </label>
              <Form.Control
                name="currentLocation"
                type="text"
                className="form-control"
                aria-label="Current Location"
                value={formik.values.currentLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.currentLocation && formik.touched.currentLocation}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.currentLocation}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="relevantExperience">
                Relevant Experience<span className="required-icon">*</span>
              </label>
              <Form.Select
                name="relevantExperience"
                className="form-control"
                aria-label="Relevant Experience"
                value={formik.values.relevantExperience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.relevantExperience && formik.touched.relevantExperience}
              >
                <option value="" disabled>
                  Select Relevant Experience
                </option>
                <option value="Fresher">Fresher</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1-2 years">1-2 years</option>
                <option value="2-3 years">2-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5-7 years">5-7 years</option>
                <option value="7-10 years">7-10 years</option>
                <option value="10+ years">10+ years</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{formik.errors.relevantExperience}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="skills">
                Key Skills<span className="required-icon">*</span>
              </label>
              <Form.Control
                name="keySkills"
                type="text"
                className="form-control"
                aria-label="Key Skills"
                value={formik.values.keySkills}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.keySkills && formik.touched.keySkills}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.keySkills}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-6 col-12">
            <Form.Group className="form-group">
              <label htmlFor="notice">
                Notice Period<span className="required-icon">*</span>
              </label>
              <Form.Select
                name="noticePeriod"
                className="form-control"
                aria-label="Notice Period"
                value={formik.values.noticePeriod}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.noticePeriod && formik.touched.noticePeriod}
              >
                <option value="" disabled>
                  Select Notice Period
                </option>
                <option value="0-10"> 0-10</option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
                <option value="40-50">40-50</option>
                <option value="50-60">50-60</option>
                <option value="Immediate Joiner">Immediate Joiner</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{formik.errors.noticePeriod}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="col-md-12 col-12 textarea_content">
            <Form.Group className="form-group">
              <label htmlFor="reason">Reason For Job Change</label>
              <Form.Select
                name="reasonForJobChange"
                className="form-control"
                aria-label="Reason For Job Change"
                value={formik.values.reasonForJobChange}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={!!formik.errors.reasonForJobChange && formik.touched.reasonForJobChange}
              >
                <option value="">Select a reason</option>
                <option value="Career Growth">Career Growth</option>
                <option value="Better Opportunity">Better Opportunity</option>
                <option value="Relocation">Relocation</option>
                <option value="Work-Life Balance">Work-Life Balance</option>
                <option value="Job Security">Job Security</option>
                <option value="Higher Salary">Higher Salary</option>
                <option value="Company Restructuring">Company Restructuring</option>
                <option value="Contract Ended">Contract Ended</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{formik.errors.reasonForJobChange}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-12 col-12">
            <div className="form-group textarea_content">
              <label htmlFor="resume">Resume</label>
              <div className="file-upload">
                <div className="card-subtitle text-center">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf, .doc, .docx, .xls, .xlsx, .png, .jpg, .jpeg"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      formik.setFieldValue("resume", file);
                    }}
                    onBlur={formik.handleBlur}
                    className="file-input"
                  />
                  <img src="/assets/images/img/career/upload.png" alt="Image" />
                  <p>Select a file or drag and drop here</p>
                  <span>Supported file types: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG. File size must not exceed 10MB.</span>
                  <p className={`${styles.file_name} mt-2`} id="text">
                    {formik?.values?.resume ? (formik.values.resume as File).name : "No file selected"}
                  </p>
                  {formData.resume && (
                    <span id="size">
                      <b>{(formData.resume.size / 1024).toFixed(2)}</b> KB
                    </span>
                  )}
                </div>
              </div>
              {formik.touched.resume && formik.errors.resume && <span className="text-danger">{formik.errors.resume}</span>}
            </div>
          </div>

          <div className="col-md-12 mt-2 solveLabel">
            <GenerateCaptchaInput ref={captchaRef} label="Please solve this" />
          </div>

          <div className="col-md-12 col-12 current_opening pt-0 pb-0">
            <Form.Group className="form-group margin-mob">
              <Button type="submit" className="btn btn-primary w-30">
                {isSubmitting ? <Loader /> : "Submit"}
              </Button>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
