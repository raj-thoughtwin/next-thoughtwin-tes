"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { Plus, Trash2, Check, X, Mail, Info } from "lucide-react";
import Loader from "../Loader";

interface EmailManagerProps {
  show: boolean;
  onHide: () => void;
  emailType: string;
  initialData?: { emails: string[]; id?: number } | null;
  isEdit: boolean;
  onSubmit: (emailType: string, data: { emails: string[] }, formId?: number) => Promise<void>;
}

const emailTypeLabels = {
  jobSupport: "Job Support",
  contactSupport: "Contact Support",
  projectSupport: "Project Support",
  chatBotSupport: "ChatBot Support",
};

const emailTypeDescriptions = {
  jobSupport: "These emails will receive notifications when users submit job applications through your career form.",
  contactSupport: "These emails will receive notifications when users submit contact requests through your contact form.",
  projectSupport: "These emails will receive notifications when users submit project estimation requests.",
  chatBotSupport: "These emails will receive notifications and reports from chatbot interactions.",
};

export default function EmailManager({ show, onHide, emailType, initialData, isEdit, onSubmit }: EmailManagerProps) {
  const [emails, setEmails] = useState<string[]>(["", ""]);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null); //
 
  useEffect(() => {
    if (initialData?.emails && initialData.emails.length > 0) {
      setEmails(initialData.emails);
    } else {
      setEmails([""]); // Just ONE default field if no initial emails
    }
    setErrors({});
  }, [initialData, show]);


  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);

    // Clear error when user types
    if (errors[index]) {
      const newErrors = { ...errors };
      delete newErrors[index];
      setErrors(newErrors);
    }
  };

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const removeEmailField = (index: number) => {
    if (emails.length > 1) {
      const newEmails = emails.filter((_, i) => i !== index);
      setEmails(newEmails);

      // Remove error for this field
      const newErrors = { ...errors };
      delete newErrors[index];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formId = hiddenInputRef.current?.value ? parseInt(hiddenInputRef.current.value, 10) : undefined;

    // Validate emails - only validate non-empty emails
    const newErrors: { [key: number]: string } = {};
    let hasErrors = false;
    let validEmailCount = 0;

    emails.forEach((email, index) => {
      if (email.trim()) {
        validEmailCount++;
        if (!validateEmail(email.trim())) {
          newErrors[index] = "Please enter a valid email address";
          hasErrors = true;
        }
      }
    });

    if (validEmailCount === 0) {
      newErrors[0] = "At least one email is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Remove empty emails and duplicates
    const validEmails = [...new Set(emails.filter((email) => email.trim()).map((email) => email.trim()))];

    setIsSubmitting(true);
    try {
      await onSubmit(emailType, { emails: validEmails }, formId);
      onHide();
    } catch (error) {
      console.error("Error submitting emails:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    const label = emailTypeLabels[emailType as keyof typeof emailTypeLabels] || emailType;
    return `${isEdit ? "Edit" : "Add"} ${label} Emails`;
  };

  const getDescription = () => {
    return emailTypeDescriptions[emailType as keyof typeof emailTypeDescriptions] || "";
  };

  if (!show) return null;

  return (
    <>
      {/* Custom Modal Overlay */}
      <div
        className="modal-backdrop-custom"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1050,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onHide}
      >
        <div
          className="modal-content-custom"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "500px",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "auto",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: "20px 24px",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>{getTitle()}</h4>
            <button
              onClick={onHide}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#6b7280",
                padding: "4px",
              }}
            >
              ×
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ padding: "24px" }}>
            {/* Email Notification Setup Info */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "16px",
                backgroundColor: "#f0f9ff",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid #e0f2fe",
              }}
            >
              <Info size={20} style={{ color: "#0ea5e9", marginTop: "2px", flexShrink: 0 }} />
              <div>
                <h6 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>Email Notification Setup</h6>
                <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.4" }}>{getDescription()}</p>
              </div>
            </div>

            <Form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Email Addresses
                </label>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    margin: "0 0 16px 0",
                    lineHeight: "1.4",
                  }}
                >
                  Add email addresses that should receive notifications for{" "}
                  {emailTypeLabels[emailType as keyof typeof emailTypeLabels]?.toLowerCase()}.
                </p>
              </div>

              {emails.map((email, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "6px",
                    }}
                  >
                    Email {index + 1}
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ position: "relative", flex: 1 }}>
                      <Mail
                        size={16}
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#9ca3af",
                          zIndex: 1,
                        }}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => handleEmailChange(index, e.target.value)}
                        placeholder="Enter email address"
                        style={{
                          width: "100%",
                          padding: "10px 12px 10px 40px",
                          border: errors[index] ? "1px solid #ef4444" : "1px solid #d1d5db",
                          borderRadius: "6px",
                          fontSize: "14px",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => {
                          if (!errors[index]) {
                            e.target.style.borderColor = "#3b82f6";
                          }
                        }}
                        onBlur={(e) => {
                          if (!errors[index]) {
                            e.target.style.borderColor = "#d1d5db";
                          }
                        }}
                      />
                      {errors[index] && (
                        <div
                          style={{
                            color: "#ef4444",
                            fontSize: "12px",
                            marginTop: "4px",
                          }}
                        >
                          {errors[index]}
                        </div>
                      )}
                    </div>
                    {emails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEmailField(index)}
                        disabled={isSubmitting}
                        style={{
                          padding: "10px 12px",
                          border: "1px solid #ef4444",
                          borderRadius: "6px",
                          backgroundColor: "white",
                          color: "#ef4444",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <input
                type="hidden" // Hidden input field
                ref={hiddenInputRef}
                value={initialData?.id || ""} // Set the value
              />
              <div style={{ marginBottom: "24px" }}>
                <button
                  type="button"
                  onClick={addEmailField}
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    color: "#374151",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <Plus size={16} />
                  Add Another Email
                </button>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                <button
                  type="button"
                  onClick={onHide}
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    color: "#374151",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <X size={16} />
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#ff0000",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Check size={16} />
                      <span>{isEdit ? "Update Emails" : "Save Emails"}</span>
                    </>
                  )}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
