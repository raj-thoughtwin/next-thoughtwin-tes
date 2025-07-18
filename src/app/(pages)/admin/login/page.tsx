// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import styles from "../../../../components/Dashboard/dashboard.module.scss";
// import { Container } from "react-bootstrap";
// import { Loader } from "@/components/Loader/Loader";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const res = await fetch("/api/check-auth", { credentials: "include" });
//       if (res.ok) {
//         router.push("/admin/dashboard");
//       }
//     };
//     checkAuth();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
  
//     try {
//       const res = await fetch("/api/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await res.json(); // Read the JSON body
  
//       if (res.ok) {
//         router.push("/admin/dashboard");
//       } else {
//         alert(data.error || "Something went wrong");
//       }
//     } catch (error) {
//       alert("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <Container>
//       <form
//         onSubmit={handleSubmit}
//         className={styles.loginForm}
//         style={{
//           maxWidth: "400px",
//           margin: "auto",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "#fff",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             fontFamily: "Rajdhani, sans-serif",
//             fontWeight: "600",
//             fontSize: "24px",
//             color: "$black-text-color",
//           }}
//         >
//           Admin Login
//         </h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontFamily: "Formular, sans-serif",
//             color: "$grey-color",
//           }}
//         />
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontFamily: "Formular, sans-serif",
//             color: "$grey-color",
//           }}
//         />
//         <div style={{ marginBottom: "15px" }}>
//           <input
//             type="checkbox"
//             id="showPassword"
//             checked={showPassword}
//             onChange={() => setShowPassword(!showPassword)}
//           />
//           <label
//             htmlFor="showPassword"
//             style={{
//               marginLeft: "8px",
//               fontFamily: "Formular, sans-serif",
//               color: "$grey-color",
//             }}
//           >
//             Show Password
//           </label>
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "$red-color",
//             color: "$white-color",
//             border: "none",
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontFamily: "Formular-Medium, sans-serif",
//             cursor: "pointer",
//             transition: "background-color 0.3s",
//           }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? <Loader /> : "Login"}
//         </button>
//       </form>
//     </Container>
//   );
// }

"use client"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"
import { Card, Form, Button, InputGroup } from "react-bootstrap"
import { Loader } from "@/components"

export default function Login() {
  const [email, setEmail] = useState("admin@thoughtwin.com")
  const [password, setPassword] = useState("password123")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/check-auth", { credentials: "include" })
      if (res.ok) {
        router.push("/admin/dashboard")
      }
    }
    checkAuth()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        router.push("/admin/dashboard")
      } else {
        alert(data.error || "Something went wrong")
      }
    } catch (error) {
      alert("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerStyle = {
    minHeight: "100vh",
    background: "#f8f9fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  }

  const cardStyle = {
    maxWidth: "480px",
    width: "100%",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    padding: "3rem 2.5rem",
  }

  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center" as const,
    marginBottom: "0.5rem",
    letterSpacing: "-0.02em",
  }

  const subtitleStyle = {
    color: "#6b7280",
    textAlign: "center" as const,
    marginBottom: "3rem",
    fontSize: "1rem",
    fontWeight: "400",
  }

  const labelStyle = {
    fontWeight: "600",
    color: "#374151",
    marginBottom: "0.5rem",
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }

  const inputStyle = {
    height: "3.5rem",
    padding: "1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "1rem",
    background: "#f9fafb",
    color: "#1f2937",
  }

  const inputFocusStyle = {
    borderColor: "#6366f1",
    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
    background: "white",
  }

  const buttonStyle = {
    width: "100%",
    height: "3.5rem",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    marginBottom: "2rem",
  }

  const securityTextStyle = {
    textAlign: "center" as const,
    color: "#9ca3af",
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  }

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      <div style={containerStyle}>
        <Card style={cardStyle}>
          <Card.Body className="p-0">
            <h1 style={titleStyle}>Admin Login</h1>
            <p style={subtitleStyle}>Welcome back! Please sign in to your account</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label style={labelStyle}>
                  <i className="bi bi-envelope"></i>
                  Email Address
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRight: "none",
                      borderRadius: "12px 0 0 12px",
                    }}
                  >
                    <i className="bi bi-envelope" style={{ color: "#9ca3af" }}></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      ...inputStyle,
                      borderLeft: "none",
                      borderRadius: "0 12px 12px 0",
                      paddingLeft: "0.75rem",
                    }}
                    onFocus={(e) => {
                      Object.assign(e.target.style, inputFocusStyle)
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb"
                      e.target.style.boxShadow = "none"
                      e.target.style.background = "#f9fafb"
                    }}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>
                  <i className="bi bi-lock"></i>
                  Password
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRight: "none",
                      borderRadius: "12px 0 0 12px",
                    }}
                  >
                    <i className="bi bi-lock" style={{ color: "#9ca3af" }}></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      ...inputStyle,
                      borderLeft: "none",
                      borderRight: "none",
                      borderRadius: "0",
                      paddingLeft: "0.75rem",
                    }}
                    onFocus={(e) => {
                      Object.assign(e.target.style, inputFocusStyle)
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb"
                      e.target.style.boxShadow = "none"
                      e.target.style.background = "#f9fafb"
                    }}
                  />
                  <InputGroup.Text
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderLeft: "none",
                      borderRadius: "0 12px 12px 0",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} style={{ color: "#6b7280" }}></i>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Button
                type="submit"
                style={buttonStyle}
                disabled={isSubmitting}
                className="d-flex align-items-center justify-content-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-in-right"></i>
                    Sign In to Dashboard
                  </>
                )}
              </Button>

              <div style={securityTextStyle}>
                <i className="bi bi-shield-check"></i>
                Secure admin access • Protected by encryption
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
