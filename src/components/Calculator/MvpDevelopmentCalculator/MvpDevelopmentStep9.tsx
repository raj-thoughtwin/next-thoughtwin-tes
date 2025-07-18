"use client";

import React from "react";
import { Form } from "react-bootstrap";
import styles from "../calculator.module.scss";
import { MvpDevelopmentCalculatorStepProps } from "@/types/calculatorTypes";

const MvpDevelopmentCalculatorStep9: React.FC<MvpDevelopmentCalculatorStepProps> = ({ formData, setFormData, selectedOption, handleChange }) => {
  const handleOtherInfohange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalInfo: value,
    }));
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className={styles.textareaBox}>
            <Form.Control
              as="textarea"
              value={formData.additionalInfo}
              rows={3}
              onChange={(e) => handleOtherInfohange(e.target.value)}
              className="form-control"
              placeholder="Please add additional information if it is necessary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpDevelopmentCalculatorStep9;
