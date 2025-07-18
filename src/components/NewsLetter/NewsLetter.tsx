import React, { useState } from "react";
import styles from "./newsletter.module.scss"; // style it separately
import { toast } from "react-toastify";

const Newsletter = () => {
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!email.trim()) return;

  //   setIsSubmitting(true);
  //   // Simulate API call
  //   // await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const res = await fetch("/api/newsletter", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email }),
  //   });
  //   const data = await res.json();
  //   if (res.ok) {
  //     toast.success(data.message);
  //     setEmail("");
  //     setIsSubscribed(true);
  //     setIsSubmitting(false);
  //   } else {
  //     toast.error(data.message);
  //   }
  // };

  return (
    <div className={styles.newsletterWrapper}>
      {/* <h2>Never miss a story</h2>
      <p>Stay updated about Thoughtwin news as it happens</p>
      {isSubscribed ? (
        <div className="success-message">Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="email-input"
          />
          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className={`subscribe-button ${isSubmitting || !email.trim() ? "disabled" : ""}`}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )} */}
    </div>
  );
};

export default Newsletter;
