"use client";

import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import styles from "./alertModal.module.scss";

const AlertModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  // ✅ Lock/unlock scroll when modal is shown
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // ✅ Clean up when unmounting
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalImage}></div>

            <div className={styles.modalContent}>
              <h3 className={styles.title}>Dear visitors,</h3>
              <p className={styles.paragraph}>
                Please pay attention to the fact that{" "}
                <strong>Thoughtwin</strong> never requires any payment, neither
                from candidates nor from employees.
              </p>
              <p className={styles.paragraph}>
                Please also notice that our official domain is{" "}
                <Link
                  href="https://thoughtwin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Thoughtwin"
                >
                  thoughtwin.com
                </Link>
              </p>
            </div>

            <button
              onClick={handleClose}
              className={styles.closeButton}
              aria-label="Close"
            >
              <MdCancel />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
