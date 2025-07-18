"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import PlusIcon from "../../../public/assets/images/plus.svg";
import MinusIcon from "../../../public/assets/images/minus.svg";
import commonstyles from "../Calculator/commancss.module.scss";

const CalculatorRoleInputField = ({ data,
  isAddSection,
  handleChange,
  formData,
  handlePositionDescChange,
  inputKey,
  activeMainTab,
  activeInnerTab, }: any) => {
  const [options, setOptions] = useState(data?.options || []);

 useEffect(() => {
  let hydratedOptions = data?.options?.map((opt: any) => ({ ...opt, count: 0 })) || [];

  if (formData) {
    // Step 1 hydration
    if (activeMainTab && activeInnerTab && formData.step1Technology?.[activeMainTab]) {
      const existingRoles = formData.step1Technology[activeMainTab]?.find(
        (item: any) => item[activeInnerTab]
      )?.[activeInnerTab] || [];

      hydratedOptions = hydratedOptions.map((opt: any) => {
        const existing = existingRoles.find((r: any) => r.label === opt.label);
        return { ...opt, count: existing?.count || 0 };
      });
    }

    // Step 2 hydration (only when no activeMainTab/activeInnerTab passed)
    if (!activeMainTab && !activeInnerTab && formData.step2Specialist) {
      hydratedOptions = hydratedOptions.map((opt: any) => {
        const existing = formData.step2Specialist.find((r: any) => r.label === opt.label);
        return { ...opt, count: existing?.count || 0 };
      });
    }
  }

  setOptions(hydratedOptions);
}, [data, formData, activeMainTab, activeInnerTab]);


  const handleIncrement = (index: number) => {
    const updated = [...options];
    updated[index].count = (updated[index].count || 0) + 1;
    setOptions(updated);
    handleChange && handleChange(updated[index].label, updated[index].count); // 🔥
  };

  const handleDecrement = (index: number) => {
    const updated = [...options];
    updated[index].count = Math.max(0, (updated[index].count || 0) - 1);
    setOptions(updated);
    handleChange && handleChange(updated[index].label, updated[index].count); // 🔥
  };

  const handleClearAll = () => {
    const cleared = options.map((opt: any) => ({ ...opt, count: 0 }));
    setOptions(cleared);
    handleChange && handleChange(cleared);
  };

  return (
    <div className="">
      <div className="row">
        {options?.length > 0 ? (
          options.map((option: any, index: number) => (
            <div className="col-md-6" key={index}>
              <div className={commonstyles.MiddleInputdiv} style={
                option.count > 0
                  ? {
                    border: "1px solid red",
                    backgroundColor: "#e6f0ff",
                    color: "#000",
                  }
                  : {}
              } >
                <h5>{option?.label || "Role"}</h5>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      handleDecrement(index);
                      sendEvent({
                        action: "decrement_click",
                        category: "cilck",
                        label: "Decrement Button",
                      });
                    }}
                  >
                    <Image src={MinusIcon} alt="Minus" />
                  </button>
                  <input type="number" value={option?.count || 0} readOnly style={{textAlign: "center"}} />
                  <button
                    type="button"
                    onClick={() => {
                      handleIncrement(index);
                      sendEvent({
                        action: "increment_click",
                        category: "cilck",
                        label: "Increment Button",
                      });
                    }}
                  >
                    <Image src={PlusIcon} alt="Plus" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No options available for this role.</p>
        )}
        <div className="text-end pt-1">
          <button className={commonstyles.clearFilterbtn} onClick={handleClearAll}>
            Clear all fields
          </button>
        </div>
      </div>

      {isAddSection && (
        <div className={commonstyles.AddYourPosition}>
          <h3>Add Your Position</h3>
          <input
            type="text"
            value={formData?.[inputKey] || ""}
            onChange={(e) => handlePositionDescChange(e.target.value)}
            placeholder="Type here..."
          />
        </div>
      )}
    </div>
  );
};

export default CalculatorRoleInputField;
