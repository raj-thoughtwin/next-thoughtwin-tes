"use client";

import { useEffect, useImperativeHandle, useState, forwardRef } from "react";
import styles from "./generateCaptchInput.module.scss";
import { CaptchaRef, GenerateCaptchaInputProps } from "@/types/captchaTYpes";

const GenerateCaptchaInput = forwardRef<CaptchaRef, GenerateCaptchaInputProps>(
  ({ label = "Please solve this", name = "captchaValue" }, ref) => {
    const [captchaQuestion, setCaptchaQuestion] = useState("");
    const [captchaAnswer, setCaptchaAnswer] = useState<number | null>(null);
    const [userCaptchaInput, setUserCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    const generateCaptcha = () => {
      const operators = ["+", "-", "*"];
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator = operators[Math.floor(Math.random() * operators.length)];

      let answer = 0;
      if (operator === "+") answer = num1 + num2;
      else if (operator === "-") answer = num1 - num2;
      else if (operator === "*") answer = num1 * num2;

      setCaptchaQuestion(`${num1} ${operator} ${num2} = ?`);
      setCaptchaAnswer(answer);
      setUserCaptchaInput("");
      setCaptchaError("");
    };

    useImperativeHandle(ref, () => ({
      validateCaptcha: () => {
        if (!userCaptchaInput.trim()) {
          setCaptchaError("Input value is required!");
          return false;
        }

        if (parseInt(userCaptchaInput, 10) !== captchaAnswer) {
          setCaptchaError("Answer is incorrect!");
          return false;
        }

        setCaptchaError("");
        return true;
      },
      regenerateCaptcha: () => generateCaptcha(),
      clearInput: () => setUserCaptchaInput(""),
    }));

    useEffect(() => {
      generateCaptcha();
    }, []);

    return (
      // <div className="col-md-12 mt-2">
      <div  className={`${styles.bottomInput} form-group mb-3`}>
        <label>
          {label} : {captchaQuestion}
          <span className={styles.required_icon}>*</span>
        </label>
        <input
          type="text"
          name={name}
          className={`${styles.Answerinput} form-control`}
          placeholder="Enter your answer"
          value={userCaptchaInput}
          onChange={(e) => {
            setUserCaptchaInput(e.target.value);
            if (captchaError && e.target.value.trim() !== "") {
              setCaptchaError("");
            }
          }}
        />
        {captchaError && <small className="text-danger">{captchaError}</small>}
      </div>
    );
  }
);

export default GenerateCaptchaInput;
