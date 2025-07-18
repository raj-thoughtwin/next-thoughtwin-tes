"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Container, Row, Col, Table, Nav, Button, Badge, Dropdown, Modal } from "react-bootstrap";
import {
  BarChart3,
  Users,
  Briefcase,
  MessageSquare,
  Search,
  Filter,
  Download,
  Plus,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Mail,
  Edit,
  Loader,
} from "lucide-react";
import Image from "next/image";
import EmailManager from "../Forms/EmailManager";
import Logo from "../../../public/assets/images/img/Logo.svg";
import Logo2 from "../../../public/assets/images/thoughtwinIcon.png";

import StepperModal from "../StepperModal";
import styles from "./dashboard.module.scss";
import BlogModal from "../Forms/BlogModal";
interface GeneratedBlogContent {
  id: 0,
  blog: any;
  title: string;
  prefix: string;
  term: string;
  make: string;
  introduction: string;
  technologyJustification: string;
  thoughtwinApproach: string;
  featureHighlights: string[];
  caseStudy: string;
  faq: { question: string; answer: string }[];
  estimatedReadingTime: number;
}
type Blog = {
  id: number;
  title: string;
  make: string;
  prefix: string;
  createdAt: string; // or Date
};

export default function Dashboard({
  applyJobData,
  contactUsData,
  serviceFormData,
  chatBotData,
  TeamExtensionCalculatorData,
  softwareDevelopmentCalculatorData,
  MVPDevelopmentCalculatorData,
  blogsData,
}: any) {
  const [activeTab, setActiveTab] = useState("emails");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogSearchTerm, setBlogSearchTerm] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedEmailType, setSelectedEmailType] = useState("");
  const [selectedEmailData, setSelectedEmailData] = useState(null);
  const [selectedBlogType, setSelectedBlogType] = useState("");
  const [selectedBlogData, setSelectedBlogData] = useState(null);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobSupportEmails, setJobSupportEmails] = useState<any[]>([]);
  const [blogData, setBlogData] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showGeneratedBlogModal, setShowGeneratedBlogModal] = useState(false);

  const router = useRouter();
  const [generatedBlogContent, setGeneratedBlogContent] = useState<GeneratedBlogContent>({
    id: 0,
    blog: '',
    title: "",
    prefix: "",
    term: "",
    make: "",
    introduction: "",
    technologyJustification: "",
    thoughtwinApproach: "",
    featureHighlights: [],
    caseStudy: "",
    faq: [],
    estimatedReadingTime: 0,
  });


  // Email support types
  const emailSupportTypes = [
    {
      id: "jobSupportEmail",
      title: "Job Support Emails Id",
      description: "Emails sent when users submit job applications",
      icon: <Briefcase size={24} className="text-primary" />,
      color: "primary",
      count: 5, // This would come from your database
    },
    {
      id: "contactSupportEmail",
      title: "Contact Support Emails Id",
      description: "Emails sent when users submit contact forms",
      icon: <Users size={24} className="text-info" />,
      color: "info",
      count: 3,
    },
    {
      id: "projectSupportEmail",
      title: "Project Support Emails Id",
      description: "Emails sent when users submit project estimation forms",
      icon: <FileText size={24} className="text-success" />,
      color: "success",
      count: 7,
    },
    {
      id: "chatBotSupportEmail",
      title: "ChatBot Support Emails Id",
      description: "Emails sent for chatbot interactions and support",
      icon: <MessageSquare size={24} className="text-warning" />,
      color: "warning",
      count: 2,
    },
    {
      id: "calculatorSupportEmail",
      title: "Calculator Support Emails Id",
      description: "Emails sent for chatbot interactions and support",
      icon: <MessageSquare size={24} className="text-warning" />,
      color: "warning",
      count: 2,
    },
  ];

  const blogTypeData = {
    id: "blog",
    title: "Create a Blog",
    description: "Blog will create",
    icon: <MessageSquare size={24} className="text-warning" />,
    color: "warning",
    count: 2,
  };

  const fetchJobSupportEmails = async () => {
    try {
      const response = await fetch(`/api/admin/email`);
      if (response.ok) {
        const data = await response.json();
        setJobSupportEmails(data);
      } else {
        toast.error("Failed to fetch Job Support Emails");
      }
    } catch (error) {
      console.error("Error fetching Job Support Emails:", error);
      toast.error("Error fetching Job Support Emails");
    }
  };

  const fetchBlogData = async () => {
    try {
      const response = await fetch(`/api/admin/blog`);
      if (response.ok) {
        const data = await response.json();
        setBlogData(data);
      } else {
        toast.error("Failed to fetch Job Support Emails");
      }
    } catch (error) {
      console.error("Error fetching Job Support Emails:", error);
      toast.error("Error fetching Job Support Emails");
    }
  };
  const blogFilteredData = useMemo(() => {
    if (!blogSearchTerm.trim()) return null;
    const lowerSearch = blogSearchTerm.toLowerCase();
    return blogData.filter(blog =>
      blog.title.toLowerCase().includes(lowerSearch)
    );
  }, [blogSearchTerm, blogData]);

  useEffect(() => {
    fetchJobSupportEmails();
    fetchBlogData();
  }, [setJobSupportEmails, setBlogData]);

  // Get current data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case "career":
        return applyJobData || [];
      case "contact":
        return contactUsData || [];
      case "project":
        return serviceFormData || [];
      case "chatbot":
        return chatBotData || [];
      case "team":
        return TeamExtensionCalculatorData || [];
      case "mvp":
        return MVPDevelopmentCalculatorData || [];
      case "software":
        return softwareDevelopmentCalculatorData || [];
      case "blog":
        return blogsData || [];
      default:
        return [];
    }
  };

  const currentData = getCurrentData();

  // Filter data based on search term
  const filteredData = currentData.filter((item: any) => {
    if (!searchTerm) return true;
    return Object.values(item).some((value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleEmailSubmit = async (emailType: string, emailData: any, formId?: number) => {
    if (typeof formId === "number") {
      try {
        const finalValues = {
          id: formId,
          emails: emailData.emails,
          formType: emailType,
        };
        setIsSubmitting(true);
        const response = await fetch(`/api/admin/email?${formId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalValues),
        });

        if (response.ok) {
          fetchJobSupportEmails();
          setShowEmailModal(false);
          setSelectedEmailType("");
          setSelectedEmailData(null);
          setIsEditMode(false);
          toast.success("Email has been updated successfully!");
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || "Failed to update email.");
        }
      } catch (err) {
        console.error("Update error:", err);
        toast.error("Something went wrong!");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      try {
        const finalValues = {
          emails: emailData.emails,
          formType: emailType,
        };
        setIsSubmitting(true);
        const response = await fetch("/api/admin/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalValues),
        });

        if (response.ok) {
          fetchJobSupportEmails();
          setShowEmailModal(false);
          setSelectedEmailType("");
          setSelectedEmailData(null);
          setIsEditMode(false);
          toast.success("Email has been Created successfully!");
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || "Failed to update email.");
        }
      } catch (err) {
        console.error("Update error:", err);
        toast.error("Something went wrong!");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBlogGeminiSubmit = async (titleData: any) => {
    try {
      setIsSubmitting(true);
      let response;
      if (titleData?.blog?.slug) {
        response = await fetch(`/api/admin/blog`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(titleData.blog),
        });
        if (response.ok) {
          const data = await response.json();
          fetchBlogData();
          setGeneratedBlogContent(data || "No content generated.");
          toast.success("Blog content created successfully!");
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || "Failed to create Blog.");
        }
      } else {
        response = await fetch("/api/admin/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(titleData),
        });
        if (response.ok) {
          const data = await response.json();
          fetchBlogData();
          setGeneratedBlogContent(data || "No content generated.");
          toast.success("Blog content generated successfully!");
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || "Failed to generated Blog.");
        }
      }
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmailModal = (emailType: string, isEdit = false, existingData = null) => {
    setSelectedEmailType(emailType);
    setIsEditMode(isEdit);
    setSelectedEmailData(existingData);
    setShowEmailModal(true);
  };

  const openBlogModal = (blogType: string, isEdit = false, existingData = null) => {
    setSelectedBlogType(blogType);
    setIsEditMode(isEdit);
    setSelectedBlogData(existingData);
    setShowBlogModal(true);
  };

  // Get column headers based on active tab
  const getColumnHeaders = () => {
    if (currentData.length === 0) return [];
    return Object.keys(currentData[0]).filter((key) => typeof currentData[0][key] !== "object" || currentData[0][key] === null);
  };
  const columnHeaders = getColumnHeaders();

  const handleLogout = async () => {
    setIsSubmitting(true); // Show loader
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to sign out. Please try again.");
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString().slice(-2); // Last 2 digits
    return `${day} ${month} ${year}`;
  };

  return (
    <div className={styles.dashboardWrapper}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${!showSidebar ? styles.collapsed : styles.show}`}>
        <div className={styles.sidebar_header}>
          <div className={styles.sidebar_logo}>
            {
              showSidebar ?
                (
                  <Image src={Logo} alt="Logo" width={130} height={32} priority className="d-inline-block align-top" />
                ) :
                (
                  <Image src={Logo2} alt="Logo" width={20} height={20} priority className="d-inline-block align-top" />
                )
            }

          </div>
        </div>
        <div className={`${styles.sidebar_nav} sidelist`}>
          {/* Navigation */}
          <Nav className={styles.flex_column} activeKey={activeTab}>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "emails" ? styles.active : ""}`}
                onClick={() => setActiveTab("emails")}
              >
                <Mail size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Email Management</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "career" ? styles.active : ""}`}
                onClick={() => setActiveTab("career")}
              >
                <Briefcase size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Career</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "contact" ? styles.active : ""}`}
                onClick={() => setActiveTab("contact")}
              >
                <Users size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Contact</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "project" ? styles.active : ""}`}
                onClick={() => setActiveTab("project")}
              >
                <FileText size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Project Estimation</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "chatbot" ? styles.active : ""}`}
                onClick={() => setActiveTab("chatbot")}
              >
                <MessageSquare size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Chat Bot</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "team" ? styles.active : ""}`}
                onClick={() => setActiveTab("team")}
              >
                <Users size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Team Extension Calculator</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "mvp" ? styles.active : ""}`}
                onClick={() => setActiveTab("mvp")}
              >
                <BarChart3 size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>MVP Development Calculator</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "software" ? styles.active : ""}`}
                onClick={() => setActiveTab("software")}
              >
                <Settings size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Software Development Calculator</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`${styles.nav_link} ${activeTab === "blog" ? styles.active : ""}`}
                onClick={() => setActiveTab("blog")}
              >
                <BarChart3 size={18} className={styles.nav_link_icon} />
                <span className={!showSidebar ? "d-none" : ""}>Blog Management</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>

        </div>
      </div>

      {/* Main Content */}
      <div className={`${styles.main_content} ${!showSidebar ? styles.expanded : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <Button
            variant="light"
            className="me-3 d-flex align-items-center justify-content-center p-2"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? <X size={18} /> : <Menu size={18} />}
          </Button>

          <div className={styles.header_search}>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={18} className={styles.text_muted} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={`${styles.header_actions} ms-auto`}>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-user" className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                  style={{ width: "32px", height: "32px" }}
                >

                </div>
                <span className="d-none d-md-block">Admin</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#signout" onClick={handleLogout}>
                  <div className="d-flex align-items-center text-danger">
                    <LogOut size={16} className="me-2" />
                    {isSubmitting ? <Loader /> : "Sign Out"}
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Dashboard Content */}
        <Container fluid className="py-4">
          {activeTab === "emails" ? (
            <>
              {/* Email Management Section */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className={styles.HeadingBox}>
                  <h2 className="mb-1">Email Management</h2>
                  <p className="text-muted mb-0">Manage email notifications for different form submissions</p>
                </div>
              </div>

              {/* Email Support Cards */}
              <Row className="g-4 mb-4">
                {emailSupportTypes
                  .filter((emailType) => {
                    return !jobSupportEmails.some((email) => email.formType === emailType.id);
                  })
                  .map((emailType) => (
                    <Col md={6} lg={3} key={emailType.id}>
                      <div className={styles.email_support_card} onClick={() => openEmailModal(emailType.id)}>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className={`rounded-circle bg-${emailType.color} bg-opacity-10 p-3`}>{emailType.icon}</div>
                        </div>
                        <h5 className="mb-2">{emailType.title}</h5>
                        <p className="text-muted small mb-3">{emailType.description}</p>
                        <div className="d-flex gap-2">
                          <Button
                            variant={`outline-${emailType.color}`}
                            size="sm"
                            className="flex-fill"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEmailModal(emailType.id);
                            }}
                          >
                            <Plus size={14} className="me-1" />
                            Add Emails
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>

              {/* Email Summary Table */}
              <div className={styles.table_card}>
                <div className={styles.table_header}>
                  <h5 className={styles.table_title}>Email Configuration Summary</h5>
                </div>
                <div className={`table-container ${["career", "mvp", "software"].includes(activeTab) ? styles.custom_tab_style : ""}`}>
                  <Table className="dashboard-table mb-0">
                    <thead>
                      <tr>
                        <th className="fw-medium">Support Type</th>
                        <th className="fw-medium">Emails</th>
                        <th className="fw-medium">Last Updated</th>
                        <th className="fw-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobSupportEmails.map((emailType) => (
                        <tr key={emailType.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              {emailType.icon}
                              <div>
                                <div>{emailType.formType}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex flex-wrap gap-2">
                              {Array.isArray(emailType.emails) ? (
                                emailType.emails.map((email: string, index: number) => (
                                  <Badge key={index} className={`${styles.badgebg} fs-6 p-0`}>
                                    {email}
                                  </Badge>
                                ))
                              ) : (
                                <Badge bg={emailType.color} className="fs-6">
                                  {emailType.emails}
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td>
                            <div>
                              <div>{formatDate(emailType.createdAt)}</div>
                              <small className="text-muted">by Admin</small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => openEmailModal(emailType.formType, true, emailType)}
                              >
                                <Edit size={14} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Stats Cards for other tabs */}
              {activeTab !== "blog" ? (
                <Row className={`g-3 mb-4 ${["career", "mvp", "software"].includes(activeTab) ? "" : ""}`}>
                  <Col md={4}>
                    <div className={`${styles.stats_card} ${["career", "mvp", "software"].includes(activeTab) ? styles.custom_mvp_style : ""}`}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className={`${styles.stats_title} text-uppercase`}>Total Careers</h6>
                        <div className="rounded-circle bg-primary bg-opacity-10 p-2">
                          <Briefcase size={20} className="text-primary" />
                        </div>
                      </div>
                      <div className={styles.stats_value}>{applyJobData?.length || 0}</div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.stats_card} ${["career", "mvp", "software"].includes(activeTab) ? styles.custom_mvp_style : ""}`}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className={`${styles.stats_title} text-uppercase`}>Total Contacts</h6>
                        <div className="rounded-circle bg-info bg-opacity-10 p-2">
                          <Users size={20} className="text-info" />
                        </div>
                      </div>
                      <div className={styles.stats_value}>{contactUsData?.length || 0}</div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.stats_card} ${["career", "mvp", "software"].includes(activeTab) ? styles.custom_mvp_style : ""}`}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className={`${styles.stats_title} text-uppercase`}>Total Projects</h6>
                        <div className="rounded-circle bg-success bg-opacity-10 p-2">
                          <FileText size={20} className="text-success" />
                        </div>
                      </div>
                      <div className={styles.stats_value}>{serviceFormData?.length || 0}</div>
                    </div>
                  </Col>
                </Row>
              ) : (
                <>
                  <div className={`${styles.header_search} ${styles.bottom_space}`}>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <Search size={18} className="text-muted" />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search..."
                        value={blogSearchTerm}
                        onChange={(e) => setBlogSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <Col md={6} lg={3} key={blogTypeData.id}>
                    <div className={styles.email_support_card} onClick={() => openBlogModal(blogTypeData.id)}>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className={`rounded-circle bg-${blogTypeData.color} bg-opacity-10 p-3`}>{blogTypeData.icon}</div>
                        <Badge bg={blogTypeData.color} className="fs-6">
                          {blogTypeData.count} emails
                        </Badge>
                      </div>
                      <h5 className="mb-2">{blogTypeData.title}</h5>
                      <p className="text-muted small mb-3">{blogTypeData.description}</p>
                      <div className="d-flex gap-2">
                        <Button
                          variant={`outline-${blogTypeData.color}`}
                          size="sm"
                          className="flex-fill"
                          onClick={(e) => {
                            e.stopPropagation();
                            openBlogModal(blogTypeData.id);
                          }}
                        >
                          <Plus size={14} className="me-1" />
                          Add Blogs
                        </Button>
                      </div>
                    </div>
                  </Col>
                  {
                   blogFilteredData?.some((row: any) => row.title === blogSearchTerm) && (
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Make</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            blogFilteredData?.map((row: any) => (
                              <tr key={row.id}>
                                <td>{row.title}</td>
                                <td>{row.make}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </Table>
                    )
                  }

                </>
              )}

              {/* Data Table for other tabs */}
              <div className={styles.table_card}>
                <div className={styles.table_header}>
                  <h5 className={styles.table_title}>
                    {activeTab === "career" && "Career Applications"}
                    {activeTab === "contact" && "Contact Requests"}
                    {activeTab === "project" && "Project Estimations"}
                    {activeTab === "chatbot" && "Chat Bot Interactions"}
                    {activeTab === "team" && "Team Extension Calculations"}
                    {activeTab === "mvp" && "MVP Development Calculations"}
                    {activeTab === "software" && "Software Development Calculations"}
                    {/* {activeTab === "blog" && "Blog Management"} */}
                  </h5>
                </div>

                <div className={`table-container ${["career", "mvp", "software"].includes(activeTab) ? styles.custom_tab_style : ""}`}>
                  {activeTab !== "blog" && filteredData.length > 0 ? (
                    <Table className={`${styles.dashboard_table} mb-0`}>
                      <thead>
                        <tr>
                          {columnHeaders.map((header, index) => (
                            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, " $1")}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item: any, index: any) => (
                          <tr key={index}>
                            {columnHeaders.map((header, colIndex) => (
                              <td key={colIndex}>
                                {typeof item[header] === "boolean"
                                  ? item[header]
                                    ? "Yes"
                                    : "No"
                                  : Array.isArray(item[header])
                                    ? item[header].join(", ")
                                    : item[header] || "-"}
                              </td>
                            ))}
                           
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : null}

                  {activeTab == "blogs" && blogData.length > 0 ? (
                    <>
                      <Table className={`${styles.dashboard_table} mb-0`}>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogData.map((item: any, index: any) => (
                            <tr key={index}>
                              {columnHeaders.map((header, colIndex) => (
                                <td key={colIndex}>
                                  {typeof item[header] === "boolean"
                                    ? item[header]
                                      ? "Yes"
                                      : "No"
                                    : Array.isArray(item[header])
                                      ? item[header].join(", ")
                                      : typeof item[header] === "object" && item[header] !== null
                                        ? (item[header].generatedText ?? JSON.stringify(item[header])) // try to extract `.generatedText`, fallback to stringified
                                        : item[header] || "-"}
                                </td>
                              ))}
                              <td>
                                <div className="d-flex gap-2">
                                  <Button
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={() => openBlogModal(blogTypeData.id, true, item)}
                                  >
                                    <Edit size={14} />
                                  </Button>
                                  <Button variant="outline-danger" size="sm">
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </>
                  ) : null}
                  {(activeTab === "blogs" && blogData.length === 0) ||
                    (activeTab !== "blogs" && filteredData.length === 0) ? (
                    <div className={styles.empty_state}>
                      <div className="mb-3">
                        <FileText size={48} className="text-muted" />
                      </div>
                      <h5>No data found</h5>
                      <p className="mb-3">There are no records to display at this time.</p>
                    </div>
                  ) : null}
                </div>

                {activeTab !== "blog" && filteredData.length > 0 && (
                  <div className="pagination">
                    <div>
                      <span className="text-muted">
                        Showing 1 to {filteredData.length} of {filteredData.length} entries
                      </span>
                    </div>
                    <div>
                      <Button variant="outline-secondary" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="primary" size="sm" className="mx-1">
                        1
                      </Button>
                      <Button variant="outline-secondary" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </Container>
      </div>

      {/* Email Manager Modal */}
      <EmailManager
        show={showEmailModal}
        onHide={() => {
          setShowEmailModal(false);
          setSelectedEmailType("");
          setSelectedEmailData(null);
          setIsEditMode(false);
        }}
        emailType={selectedEmailType}
        initialData={selectedEmailData}
        isEdit={isEditMode}
        onSubmit={handleEmailSubmit}
      />
      {/* Blog Manager Modal */}
      <StepperModal isOpen={showBlogModal} onClose={() => setShowBlogModal(false)} onSubmit={handleBlogGeminiSubmit} generatedBlogContent={generatedBlogContent} />
    </div>
  );
}
