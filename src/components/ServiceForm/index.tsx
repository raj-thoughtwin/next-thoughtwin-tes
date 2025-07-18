"use client";

import React, { useRef } from "react";
import { FormikHelpers, useFormik } from "formik";
import { ServiceFormInterface } from "@/types/types";
import { serviceFormValidationSchema } from "@/validation/serviceFormValidation";
import GenerateCaptchaInput from "../GenerateCaptchaInput";
import Loader from "../Loader";
import { CaptchaRef } from "@/types/captchaTYpes";

type ServiceFormProps = {
  // onSubmit?: (values: ServiceFormInterface, resetForm: any) => Promise<void>;
  onSubmit: (values: ServiceFormInterface, formikHelpers: FormikHelpers<ServiceFormInterface>) => Promise<void>;
  isSubmitting?: boolean;
};

const ServiceForm: React.FC<ServiceFormProps> = ({ onSubmit, isSubmitting }) => {
  const captchaRef = useRef<CaptchaRef | null>(null);
  // const captchaRef = React.useRef<{ validateCaptcha: () => boolean } | null>(null) ;// Define captchaRef with proper type

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      message: "",
      phone_number: "",
    },
    validationSchema: serviceFormValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, formikHelpers) => {
      if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
        return;
      }
      await onSubmit(values, formikHelpers);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <h2 className="text-capitalize">Lets talk for project Estimation</h2>

      <div className="form-group mb-3">
        <label htmlFor="fname">First Name<span className="required-icon">*</span></label>
        <input
          type="text"
          className="form-control"
          id="fname"
          name="fname"
          value={formik.values.fname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="First Name"
          placeholder="Enter first name"
        />
        {formik.touched.fname && formik.errors.fname && <small className="text-danger">{formik.errors.fname}</small>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="lname">Last Name<span className="required-icon">*</span></label>
        <input
          type="text"
          className="form-control"
          id="lname"
          name="lname"
          value={formik.values.lname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Last Name"
          placeholder="Enter last name"
        />
        {formik.touched.lname && formik.errors.lname && <small className="text-danger">{formik.errors.lname}</small>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">
          Email<span className="required-icon">*</span>
        </label>
        <input
          className="form-control"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Email"
          placeholder="Enter email"
        />
        {formik.touched.email && formik.errors.email && <small className="text-danger">{formik.errors.email}</small>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          rows={3}
          cols={5}
          id="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Message"
          placeholder="Enter message"
        />
        {formik.touched.message && formik.errors.message && <small className="text-danger">{formik.errors.message}</small>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone_number">
          Mobile Number<span className="required-icon">*</span>
        </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          className="form-control"
          value={formik.values.phone_number}
          onChange={(e) => {
            const value = e.target.value;
            // Allow only digits (you can also add a length limit here, e.g., 10)
            if (/^\d*$/.test(value)) {
              formik.setFieldValue("phone_number", value);
            }
          }}
          onBlur={formik.handleBlur}
          aria-label="Phone Number"
          placeholder="Enter mobile number"
        />
        {formik.touched.phone_number && formik.errors.phone_number && <small className="text-danger">{formik.errors.phone_number}</small>}
      </div>

      <div className="col-md-12 mt-2">
        <GenerateCaptchaInput ref={captchaRef} label="Please solve this" />
      </div>

      {/* {successMessage && <div className="alert alert-success">{successMessage}</div>} */}

      <button type="submit">{isSubmitting ? <Loader /> : "Submit"}</button>
    </form>
  );
};

export default ServiceForm;
