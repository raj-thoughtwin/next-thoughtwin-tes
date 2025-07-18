import React from "react";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import styles from "../../components/Calculator/calculator.module.scss";

const CalculatorInputList = ({
  data,
  isShow,
  title,
  selectedOption,
  handleSelect,
  handleChange,
  formData,
  handleNoteChange = () => { },
  inputKey,
  isMultiSelect = false,
}: any) => {

  return (
    <div>
      <div className="row">
        {data?.options?.map((opt: any, index: number) => {
          const isActive = Array.isArray(selectedOption) ? selectedOption.includes(opt?.label) : selectedOption === opt?.label;
          return (
            <div className="col-md-6" key={index}>
              <div
                className={`${styles.step1Outer}`}
                onClick={() => {
                  sendEvent({
                    action: "calculator_Input_click",
                    category: "cilck",
                    label: "Calculator Input Click",
                  });
                  if (isMultiSelect) {
                    let newSelection = Array.isArray(selectedOption) ? [...selectedOption] : [];
                    if (newSelection.includes(opt?.label)) {
                      newSelection = newSelection.filter((val) => val !== opt?.label);
                    } else {
                      newSelection.push(opt?.label);
                    }
                    // handleSelect(newSelection); // multiple
                    handleSelect(opt?.label); // multiple or single
                  } else {
                    handleSelect(opt?.label); // single
                  }

                  handleChange(opt?.label);
                }}
              >
                <div className={`${styles.cost} ${isActive ? styles.active : ""}`}>
                  <Image
                    src={opt.icon || "/placeholder.svg"}
                    alt={opt.label || "Option image"}
                    title={opt.label || "Option image"}
                    width={25}
                    height={25}
                  />                 
                  <h4>{opt?.label}</h4>
                </div>
                <div className={styles.ImgBoxOuter}></div>
              </div>
            </div>
          );
        })}
      </div>

      {isShow && (
        <div className={styles.InputBox}>
          <label>{title}</label>
          <input
            type="text"
            value={formData?.[inputKey] || ""}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Type here..."
          />
        </div>
      )}
    </div>
  );
};

export default CalculatorInputList;
