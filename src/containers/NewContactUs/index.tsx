"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Image from "next/image";
import { Form } from "react-bootstrap";
import { FaPaperclip } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { GenerateCaptchaInput } from "@/components";
import { CaptchaRef } from "@/types/captchaTYpes";
import Loader from "@/components/Loader";
import ProjectSlider from "@/components/ProectSlider/ProjectSlider";
import Introimg from "../../../public/assets/images/IntroImg.svg";
import Contact1 from "../../../public/assets/images/contact1.svg";
import Contact2 from "../../../public/assets/images/contact2.svg";
import Contact3 from "../../../public/assets/images/contact3.svg";
import ChooseImg from "../../../public/assets/images/weArearrow.png";
import Location from "../../../public/assets/images/location.png";
import Locationimg from "../../../public/assets/images/img/contact/2.svg";
import ContactAddr from "../../../public/assets/images/img/contact/1.svg";
import Contactmail from "../../../public/assets/images/img/contact/3.svg";
import styles from "./newcontactus.module.scss";

const NewContactUs = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [buttons, setButtons] = useState(["+ Build full product", "+ Start with MVP", "+ Update product", "+ ERP or Odoo services"]);
  const allButtons = [
    "+ Build full product",
    "+ Start with MVP",
    "+ Update product",
    "+ ERP services",
  ];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customMessage, setCustomMessage] = useState<string>("");

  const [formData, setFormData] = useState({
    interested: [] as String[],
    industry: "",
    budget: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
    agreeTerms: false,
    sendNDA: false,
    fileUrl: null as File | null,
  });

  const captchaRef = useRef<CaptchaRef | null>(null);

  // const handleClick = (btnText: string) => {
  //   const updated = formik.values.description ? `${formik.values.description}, ${btnText}` : btnText;

  //   formik.setFieldValue("description", updated);
  //   setButtons((prev) => prev.filter((item) => item !== btnText));
  // };
  const handleClick = (btnText: string) => {
    if (!selectedTags.includes(btnText)) {
      const updated = [...selectedTags, btnText];
      setSelectedTags(updated);
      formik.setFieldValue("description", updated.join(", "));
    }
  };

  const handleRemoveTag = (tag: string) => {
    const updated = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updated);
    formik.setFieldValue("description", updated.join(", "));
  };
  useEffect(() => {
    const fullMessage = `${selectedTags.join(", ")}${selectedTags.length > 0 && customMessage ? " - " : ""}${customMessage}`;
    formik.setFieldValue("description", fullMessage);
  }, [selectedTags, customMessage]);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    formik.setFieldValue("fileUrl", selectedFile);
    if (selectedFile) {
      setFile(selectedFile);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 300);
  };

  const handleRemove = () => {
    setFile(null);
    setUploadProgress(0);
  };

  const formik = useFormik({
    initialValues: {
      interested: [] as String[],
      industry: "",
      budget: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      description: "",
      agreeTerms: false,
      sendNDA: false,
      fileUrl: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Full name is required")
        .matches(
          /^[A-Za-z\s]+$/,
          "Full name can only contain letters and spaces"
        ),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number must be at least 10 digits")
        .max(10, "Phone number must be at most 10 digits"),
      industry: Yup.string().required("Please select your industry"),
      budget: Yup.string().required("Please select your budget"),
      interested: Yup.array().min(1, "Please select at least one interest"),
      agreeTerms: Yup.boolean().oneOf(
        [true],
        "You must accept the Terms & Conditions before sending you message"
      ),
      sendNDA: Yup.boolean(),
      fileUrl: Yup.mixed()
        .required("File is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (!value) return false;
          const allowedTypes = [
            "application/pdf",
            "text/plain",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ];
          return allowedTypes.includes((value as File).type);
        }),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
        return;
      }
      try {
        setIsSubmitting(true);
        const excludedValue = ["agreeTerms", "sendNDA"];
        const formDataToSend = new FormData();
        Object.entries(values).forEach(([key, val]) => {
          if (excludedValue.includes(key)) return;
          formDataToSend.append(key, val as any);
        });
        if (file) {
          formDataToSend.append("file", file);
        }
        const response = await fetch("/api/contact-us", {
          method: "POST",
          body: formDataToSend,
        });
        resetForm();
        captchaRef.current?.clearInput();

        if (response.ok) {
          toast.success("Your application has been submitted successfully!");
          resetForm();
          setSelectedValue(null);
          setSelectedIndustry(null);
          setFile(null);
          setUploadProgress(0);
          setIsSubmitting(false);
        } else {
          toast.error(
            "Failed to submit your application. Please try again later."
          );
        }
      } catch (err: any) {
        toast.error(err.message);
      } finally {
        setIsSubmitting(false);
      }
    },
    // validateOnChange: false
  });

  const sliderSettings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1500,
    autoplay: true,
    arrows: true,
    centerPadding: "10px",
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className={styles.contactArea}>
      <div className={styles.headingBox}>
        <h2>Let’s Connect!</h2>
        <p>
          Send us a message, and we'll promptly discuss your project with you.
        </p>
      </div>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col sm={6} md={7} lg={8} xl={8}>
              <div className={`${styles.contactLeftArea} ${styles.InteroLeft}`}>
                <div className={styles.checkBoxOuter}>
                  <h4>What you are interested in</h4>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="Custom software development"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes(
                          "Custom software development"
                        )}
                      />
                      <span className={styles.checkmark}></span>Custom software
                      development
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="Tech consultation"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes(
                          "Tech consultation"
                        )}
                      />
                      <span className={styles.checkmark}></span>Tech
                      consultation
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="Tech outstaffing"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes(
                          "Tech outstaffing"
                        )}
                      />
                      <span className={styles.checkmark}></span>Tech outstaffing
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="ERP implementation services"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes(
                          "ERP implementation services"
                        )}
                      />
                      <span className={styles.checkmark}></span>ERP
                      implementation services
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="AI services"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes(
                          "AI services"
                        )}
                      />
                      <span className={styles.checkmark}></span>AI services
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        name="interested"
                        value="Other"
                        onChange={formik.handleChange}
                        checked={formik.values.interested.includes("Other")}
                      />
                      <span className={styles.checkmark}></span>Other
                    </label>
                  </p>
                  {formik.touched.interested &&
                    formik.errors.interested &&
                    typeof formik.errors.interested === "string" && (
                      <div className="text-danger">
                        {formik.errors.interested}
                      </div>
                    )}
                </div>

                <div className={styles.checkBoxOuter}>
                  <h4>Your budget</h4>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="budget"
                        value="$20K"
                        onChange={formik.handleChange}
                        checked={formik.values.budget.includes("$20K")}
                        readOnly
                      />
                      <span className={styles.checkmark}></span> &lt; $20K
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="budget"
                        value="$20K - 200K"
                        onChange={formik.handleChange}
                        checked={formik.values.budget.includes("$20K - 200K")}
                        readOnly
                      />
                      <span className={styles.checkmark}></span> $20K - 200K
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="budget"
                        value="$200K"
                        onChange={formik.handleChange}
                        checked={formik.values.budget.includes("$200K")}
                        readOnly
                      />
                      <span className={styles.checkmark}></span> &gt; $200K
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="budget"
                        value="Non-disclosure"
                        onChange={formik.handleChange}
                        checked={formik.values.budget.includes(
                          "Non-disclosure"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span> Non-disclosure
                    </label>
                  </p>
                  {formik.touched.budget && formik.errors.budget && (
                    <div className="text-danger">{formik.errors.budget}</div>
                  )}
                </div>

                <div className={styles.checkBoxOuter}>
                  <h4>Your industry</h4>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Healthcare & life-sciences"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Healthcare & life-sciences"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Healthcare &
                      life-sciences
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Real estate & proptech"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Real estate & proptech"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Real estate &
                      proptech
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Fintech & insurance"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Fintech & insurance"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Fintech &
                      insurance
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Travel & hospitality"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Travel & hospitality"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Travel &
                      hospitality
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Telecom & media"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Telecom & media"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Telecom & media
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Retail & e-commerce"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Retail & e-commerce"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Retail &
                      e-commerce
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Edtech & e-learning"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Edtech & e-learning"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Edtech &
                      e-learning
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Software & hi-tech"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Software & hi-tech"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Software &
                      hi-tech
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Construction & infrastructure"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Construction & infrastructure"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Construction &
                      infrastructure
                    </label>
                  </p>

                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Manufacturing & automotive"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes(
                          "Manufacturing & automotive"
                        )}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Manufacturing &
                      automotive
                    </label>
                  </p>
                  <p>
                    <label className={styles.customCheckbox}>
                      <input
                        type="radio"
                        name="industry"
                        value="Other"
                        onChange={formik.handleChange}
                        checked={formik.values.industry.includes("Other")}
                        readOnly
                      />
                      <span className={styles.checkmark}></span>Other
                    </label>
                  </p>
                  {formik.touched.industry && formik.errors.industry && (
                    <div className="text-danger">{formik.errors.industry}</div>
                  )}
                </div>
                <div className={styles.checkBoxOuter}>
                  <h4>Your message (optional)</h4>
                  {/* <Row>
                    <Col sm={12} md={12} lg={7} xl={8}>
                      <textarea
                        className="InnerInput"
                        value={formik.values.description}
                        onChange={(e) => formik.setFieldValue("description", e.target.value)}
                        placeholder="Type additional information here or use the quick choice on the right"
                      ></textarea>
                    </Col>
                    <Col sm={12} md={12} lg={5} xl={4}>
                      <div className={styles.TextareaRight}>
                        {buttons.map((btn, index) => (
                          <button type="button" key={index} onClick={() => handleClick(btn)} className="your-existing-button-style" >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col sm={12} md={12} lg={7} xl={8}>
                      {/* Render tags as boxes */}
                      <div className={styles.tagContainer}>
                        {selectedTags.map((tag) => (
                          <div
                            key={tag}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              backgroundColor: "transparent",
                              borderRadius: "4px",
                              border: "1px solid #ffc7c7",
                              padding: "5px 10px",
                              margin: "5px",
                            }}
                          >
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedTags(
                                  selectedTags.filter((t) => t !== tag)
                                )
                              }
                              style={{
                                background: "transparent",
                                border: "none",
                                marginLeft: "8px",
                                color: "red",
                                fontWeight: "bold",
                                cursor: "pointer",
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Hidden textarea to submit via formik */}
                      <textarea
                        rows={4}
                        className="form-control"
                        placeholder="Write your message..."
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                      />

                      <textarea
                        className="d-none"
                        name="description"
                        value={formik.values.description}
                        readOnly
                      />
                    </Col>

                    <Col sm={12} md={12} lg={5} xl={4}>
                      <div className={styles.TextareaRight}>
                        {allButtons
                          .filter((tag) => !selectedTags.includes(tag)) // ← hide selected tags
                          .map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() =>
                                setSelectedTags([...selectedTags, tag])
                              }
                            >
                              {tag}
                            </button>
                          ))}
                      </div>
                    </Col>
                  </Row>

                  <div className={styles.UplodBox}>
                    <div className={styles.fileUploadWrapper}>
                      <label
                        htmlFor="fileUrl"
                        className={styles.customFileLabel}
                      >
                        <FaPaperclip className={styles.icon} />
                        Attach file (pdf, txt or docx)
                      </label>
                      <label htmlFor="fileUrl">
                        <input
                          type="file"
                          id="fileUrl"
                          name="fileUrl"
                          className={styles.hiddenFileInput}
                          accept=".pdf,.txt,.doc,.docx"
                          onChange={handleFileChange}
                          onBlur={formik.handleBlur}
                        />
                        <p className={`${styles.file_name} mt-2`} id="text">
                          {formik?.values?.fileUrl ?
                            (formik.values.fileUrl as File).name
                          : "No file selected"}
                        </p>
                      </label>

                      {formData.fileUrl && (
                        <span id="size">
                          <b>{(formData.fileUrl.size / 1024).toFixed(2)}</b> KB
                        </span>
                      )}
                    </div>

                    {file && (
                      <div className={styles.progressContainer}>
                        <div className={styles.progressHeader}>
                          <span className={styles.fileName}>{file.name}</span>
                          <FaTimes
                            className={styles.deleteIcon}
                            onClick={handleRemove}
                            title="Remove"
                          />
                        </div>
                        <ProgressBar
                          now={uploadProgress}
                          label={`${uploadProgress}%`}
                        />
                      </div>
                    )}
                  </div>
                  {formik.touched.fileUrl && formik.errors.fileUrl && (
                    <span className="text-danger">{formik.errors.fileUrl}</span>
                  )}
                </div>
                <div className={styles.checkBoxOuter}>
                  <h4>Personal information</h4>
                  <Row>
                    <Col sm={12} md={12} xl={4} lg={4}>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          placeholder="Full Name*"
                          {...formik.getFieldProps("fullName")}
                          style={{ color: "black" }}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                          <span className="text-danger">
                            {formik.errors.fullName}
                          </span>
                        )}
                      </div>
                    </Col>
                    <Col sm={12} md={12} xl={4} lg={4}>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          placeholder="Work Email*"
                          {...formik.getFieldProps("email")}
                          style={{ color: "black" }}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span className="text-danger">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                    </Col>
                    <Col sm={12} xl={4} lg={4}>
                      <div
                        className={`${styles.inputBox} ${styles.bottomSpace}`}
                      >
                        <input
                          type="text"
                          placeholder="Work Phone*"
                          {...formik.getFieldProps("phoneNumber")}
                          style={{ color: "black" }}
                        />
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber && (
                            <span className="text-danger">
                              {formik.errors.phoneNumber}
                            </span>
                          )}
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={styles.checkBoxOuter}>
                  <div className={styles.termBox}>
                    <label className={styles.customCheckbox2}>
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.agreeTerms}
                      />{" "}
                      <span className={styles.checkmark}></span>I agree with{" "}
                      <span className="ps-1">
                        <Link href="/privacy-policy">Terms & Conditions</Link>
                      </span>
                    </label>
                    {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                      <span className="text-danger">
                        {formik.errors.agreeTerms}
                      </span>
                    )}

                    <label className={styles.customCheckbox2}>
                      <input
                        type="checkbox"
                        name="sendNDA"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.sendNDA}
                      />{" "}
                      <span className={styles.checkmark}></span>
                      <span>Send me NDA</span>
                    </label>
                  </div>
                  <div className="col-md-12 mt-2">
                    <GenerateCaptchaInput
                      ref={captchaRef}
                      label="Please solve this"
                    />
                  </div>
                </div>
                {
                  <button
                    type="submit"
                    onClick={handleRemove}
                    className={styles.RequestBtn}
                  >
                    {isSubmitting ?
                      <Loader />
                    : "Send Your Request"}
                  </button>
                }
              </div>
            </Col>
            <Col sm={6} md={5} lg={4} xl={4}>
              <div className={styles.IntroRight}>
                <div className={styles.ImgBox}>
                  <Image src={Introimg} alt="Calculator" height={225} />
                  <div className={styles.TextBox}>
                    <h3>Estimate Your Costs with</h3>
                    <h2 className="pb-2">Our Calculators</h2>
                    <Link
                      href="/pricing-calculator"
                      aria-label="Pricing Calculator"
                    >
                      <button type="button">Get your calculation</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Form>

        <section className={styles.ClientJourney}>
          <div className={`${styles.ClientsJourneyInner} clientslider`}>
            <h3>Our clients journeys</h3>
            <Slider {...sliderSettings}>
              <div className={styles.TabBox}>
                <Image src={Contact1} alt="blog" />
              </div>
              <div className={styles.TabBox}>
                <Image src={Contact2} alt="blog" />
              </div>
              <div className={styles.TabBox}>
                <Image src={Contact3} alt="blog" />
              </div>
            </Slider>
          </div>
        </section>
        <section className={styles.WhoWeAreArea}>
          <Row>
            <Col sm={6}>
              <div className={styles.WeareBox}>
                <div className={styles.TopBox}>
                  <h3>Who we are</h3>{" "}
                  <Link href="/about-us" aria-label="Read More">
                    Read More
                  </Link>
                </div>
                <p>
                  ThoughtWin is a renowned name in web/mobile design,
                  development in the software industry, but - WHY? This is
                  because we design
                  <br /> and develop websites that represent your company and
                  spread across the globe.
                </p>
                <p>
                  The client's continued support, trust and recommendations are
                  sufficient to describe the quality of our work.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.ProfessionalsBox}>
                <h2>500</h2>
                <h3>Skilled Professionals</h3>
              </div>
              <div className={styles.ChooseUs}>
                <h3>Why choose us</h3>
                <div className={styles.chooseImg}>
                  <Image src={ChooseImg} alt="blog" />
                </div>
                <Row>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Products delivered:</h4> <h3>150+</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Years on the market:</h4> <h3>07</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Client satisfaction rate:</h4> <h3>99%</h3>
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} xl={6}>
                    <div className={styles.Product}>
                      <h4>Awards & certifications:</h4> <h3>60+</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.OurLocation}>
          <h2>Our locations</h2>
          <div className={styles.LocationImg}>
            <Image src={Location} alt="blog" />
          </div>

          <Row>
            <Col sm={12} md={12} lg={8} xl={8}>
              <h3 className={styles.main_head}>India</h3>
              <div className={styles.addr}>
                <Row>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <div className={styles.right_bor}>
                      <div className={styles.add_box}>
                        <h2>Indore - Head Office</h2>
                        <ul>
                          <li>
                            <Image
                              src={ContactAddr}
                              className={styles.loaction}
                              alt="location"
                              width={25}
                            />
                            <p>
                              Address:
                              <span className={styles.color_grey}>
                                1 Panna estate, Kesar Bagh Rd, Indira Gandhi
                                Nagar, Indore, Madhya Pradesh 452001
                              </span>
                            </p>
                          </li>
                          <li>
                            <Image
                              src={Locationimg}
                              className={styles.loaction}
                              alt="location"
                              width={25}
                            />
                            <p>
                              Contact:{" "}
                              <a
                                href="tel:+916265525569"
                                className={styles.color_blue}
                              >
                                +916265525569
                              </a>
                            </p>
                          </li>
                          <li>
                            <Image
                              src={Contactmail}
                              className={styles.loaction}
                              alt="location"
                              width={25}
                            />
                            <p>
                              Email:{" "}
                              <a
                                href="mailto:info@thoughtwin.com"
                                className={styles.color_blue}
                              >
                                info@thoughtwin.com
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col sx={12} sm={12} md={6} lg={6}>
                    <div className={styles.add_box}>
                      <h2>Neemuch - Branch Office </h2>
                      <ul>
                        <li>
                          <img
                            src="/assets/images/img/contact/1.svg"
                            className="loaction"
                            alt="location"
                          />
                          <p>
                            Address:
                            <span className={styles.color_grey}>
                              Bungalow No. 07, Behind IDBI Bank, Neemuch (M.P.)
                              - 458441
                            </span>
                          </p>
                        </li>
                        <li>
                          <Image
                            src={Locationimg}
                            className={styles.loaction}
                            alt="location"
                            width={25}
                          />
                          <p>
                            Contact:{" "}
                            <a
                              href="tel:+916265525569"
                              className={styles.color_blue}
                            >
                              +916265525569
                            </a>
                          </p>
                        </li>

                        <li>
                          <img
                            src="/assets/images/img/contact/3.svg"
                            className="loaction"
                            alt="email"
                          />
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:info@thoughtwin.com"
                              className={styles.color_blue}
                            >
                              info@thoughtwin.com
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={6} md={6} lg={4} xl={4}>
              <h3 className={styles.main_head}>canada</h3>
              <div className={styles.addr}>
                <div className={`${styles.add_box} ${styles.right_bor1}`}>
                  <div className={styles.add_box}>
                    <h2>Canada Office</h2>

                    <ul>
                      <li className="w-100">
                        <Image
                          src={ContactAddr}
                          className={styles.loaction}
                          alt="location"
                          width={25}
                        />
                        <p>
                          Address:
                          <span className={styles.color_grey}>
                            3145 Goretti place Mississauga ON,Canada
                          </span>
                        </p>
                      </li>
                      <li>
                        <Image
                          src={Locationimg}
                          className={styles.loaction}
                          alt="location"
                          width={25}
                        />
                        <p>
                          Contact:{" "}
                          <a
                            href="tel:+16265525569"
                            className={styles.color_blue}
                          >
                            +16265525569
                          </a>
                        </p>
                      </li>
                      <li className="w-100">
                        <img
                          src="/assets/images/img/contact/mail.png"
                          className="loaction"
                          alt="email"
                        />
                        <p>
                          Email:{" "}
                          <a
                            href="mailto: marketing@thoughtwin.com"
                            className={styles.color_blue}
                          >
                            marketing@thoughtwin.com
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className={styles.ProjectSlider_div}>
        <ProjectSlider />
      </section>
    </section>
  );
};

export default NewContactUs;
