import React from "react";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import styles from "../../components/Calculator/calculator.module.scss";

const CalculatorColumnCard = ({ data, selectedOption, handleSelect, handleChange }: any) => {
  return (
    <section>
      <div className="row">
        {data?.options?.map((option: any, index: number) => {
          const isActive = Array.isArray(selectedOption) ? selectedOption.includes(option?.label) : selectedOption === option?.label;

          return (
            <div key={index} className="col-md-6">
              <div
                onClick={() => {
                  handleSelect(option?.label);
                  handleChange(option?.label); // ✅ triggers any other tracking
                  sendEvent({
                    action: "calculator_Card_click",
                    category: "click",
                    label: "Card Click",
                  });
                }}
                // onClick={() => {
                //   handleChange(option?.label);
                //   handleSelect(option?.label);
                //   sendEvent({
                //     action: "calculator_Card_click",
                //     category: "cilck",
                //     label: "Card Click",
                //   });
                // }}
                className={`${styles.itemBox} ${isActive ? styles.active : ""}`}
              >
                <Image src={option?.icon} alt="software development company" title="" width={100} height={100} />
                <h4>{option?.label}</h4>
                <p>{option?.labelDes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CalculatorColumnCard;
