"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { Check, X } from "lucide-react";
import Loader from "../Loader";

interface BlogManagerProps {
  show: boolean;
  onHide: () => void;
  blogType: string;
  initialData?: { title: string; id?: number } | null;
  isEdit: boolean;
  onSubmit: (blogType: string, title: string, formId?: number) => Promise<void>;
}

const blogTypeLabels = {
  blogSupport: "Blog Support",
};

export default function BlogManager({ show, onHide, blogType, initialData, isEdit, onSubmit }: BlogManagerProps) {
  const [title, setTitle] = useState<string>("");
  const [errors, setErrors] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null); //
  useEffect(() => {
    if (initialData?.title) {
      // Ensure at least 2 email fields
      const emailList = initialData.title.length >= 1 ? initialData.title : "";
      setTitle(emailList);
    } else {
      setTitle("");
    }
    setErrors('');
  }, [initialData, show]);

  const handleTitleChange = (value: string) => {
    setTitle(value);

    // Clear error when user types
    if (errors) {
      const newErrors = errors;
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formId = hiddenInputRef.current?.value ? parseInt(hiddenInputRef.current.value, 10) : undefined;

    // Validate emails - only validate non-empty emails
    let newErrors: string = "";
    let hasErrors = false;
    
    if (title.trim().length === 0) {
      newErrors = "Please enter a valid title";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(blogType, title.trim(), formId);
      onHide();
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    const label = blogTypeLabels[blogType as keyof typeof blogTypeLabels] || blogType;
    return `${isEdit ? "Edit" : "Add"} ${label}`;
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
            <Form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  Title
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ position: "relative", flex: 1 }}>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter Title"
                      style={{
                        width: "100%",
                        padding: "10px 12px 10px 10px",
                        border: errors ? "1px solid #ef4444" : "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => {
                        if (!errors) {
                          e.target.style.borderColor = "#3b82f6";
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors) {
                          e.target.style.borderColor = "#d1d5db";
                        }
                      }}
                    />
                    {errors && (
                      <div
                        style={{
                          color: "#ef4444",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {errors}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <input
                type="hidden" // Hidden input field
                ref={hiddenInputRef}
                value={initialData?.id || ""} // Set the value
              />
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
                    backgroundColor: "#4f46e5",
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
                      <span>{isEdit ? "Update Blog" : "Save Blog"}</span>
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
