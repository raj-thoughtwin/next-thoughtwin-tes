"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./hardtochoose.module.scss";
import Choose from "../../../public/assets/images/choose.png";
import close from "../../../public/assets/images/close.svg";

const HardToChoose = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <>
      {isVisible && (
        <div className={styles.Hard_choose}>
          <span className={styles.close}><Image onClick={(e) => setIsVisible(false)} src={close} width={20} height={20} alt="" title="" /></span>
          <Image src={Choose} alt="" />
          <div className="ps-2">
            <h3>
              Need a hand?<span>We’re here!</span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default HardToChoose;
