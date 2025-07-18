"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { sendEvent } from "@/lib/ga";
import SuccessIcon from "../../../public/assets/images/success.svg";
import styles from "./CalculatorSucessPopup.module.scss";

const CalCulatorSucessPopup = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.successfullyDiv}>
        <Image src={SuccessIcon} alt="" />
        <h3>Your form has been successfully submitted.</h3>
        <p>We will contact you within 2 business days</p>

        <button
          onClick={() => {
            {
              router.push("/pricing-calculator");
              sendEvent({
                action: "success_button_click",
                category: "cilck",
                label: "Success Popup Button",
              });
            }
          }}
        >
          Go to main page
        </button>
      </div>
    </div>
  );
};

export default CalCulatorSucessPopup;
