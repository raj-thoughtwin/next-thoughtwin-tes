"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface GeneratedBlogContent {
  id: number;
  title: string;
  description: {
    content: {
      generatedText: string;
    };
  };
}

interface BlogModalProps {
  showGeneratedBlogModal: boolean;
  setShowGeneratedBlogModal: (show: boolean) => void;
  generatedBlogContent: GeneratedBlogContent;
  onHide: () => void;
  onSubmit: (title: GeneratedBlogContent) => Promise<void>;
}

export default function BlogModal({ showGeneratedBlogModal, generatedBlogContent, onHide, onSubmit }: BlogModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editableContent, setEditableContent] = useState(generatedBlogContent.description.content.generatedText || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(generatedBlogContent);
      onHide();
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showGeneratedBlogModal) return null;
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
      >
        <div
          className="modal-content-custom"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "700px",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
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
            <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Generated Blog</h4>
            <button
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
          {showEditor ? (
            <>
              <label style={{ fontWeight: 600, marginBottom: 4 }}>Edit Blog Content</label>
              <input
                type="text"
                style={{
                        width: "100%",
                        padding: "10px 12px 10px 10px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                // value={editableContent}
                value={""}
                onChange={(e) => setEditableContent(e.target.value)}
              />
              <input
                type="text"
                style={{
                        width: "100%",
                        padding: "10px 12px 10px 10px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                // value={editableContent}
                value={generatedBlogContent?.id}
                onChange={(e) => setEditableContent(e.target.value)}
              />
            </>
          ) : (
            <div
              style={{
                padding: "24px",
                flex: 1,
                overflow: "auto",
                maxHeight: "calc(90vh - 140px)",
              }}
            >
              <h2>{generatedBlogContent.title}</h2>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#374151",
                  margin: 0,
                  padding: "16px",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              >
                {generatedBlogContent.description.content.generatedText}
              </pre>
            </div>
          )}
          {/* Modal Footer */}
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              backgroundColor: "#f9fafb",
            }}
          >
            <button
              type="button"
              onClick={() => setShowEditor(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="bg-primary"
            >
              Retry
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="bg-success"
            >
              Approve
            </button>
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="bg-secondary"
              onClick={onHide}
            >
              <X size={16} />
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
