"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import Logo from "../../../public/assets/images/img/Logo.svg";
import Android from "../../../public/assets/images/img/services/Android.svg";
import Androidw from "../../../public/assets/images/img/services/Androidw.svg";
import IOS from "../../../public/assets/images/img/services/IOS.svg";
import Iosw from "../../../public/assets/images/img/services/iosw.svg";
import React from "../../../public/assets/images/img/services/React.svg";
import Reacts from "../../../public/assets/images/img/services/Reacts.svg";
import Flutter from "../../../public/assets/images/img/services/Flutter.svg";
import Flutterw from "../../../public/assets/images/img/services/Flutterw.svg";
import Python from "../../../public/assets/images/img/services/Python.svg";
import Pythonw from "../../../public/assets/images/img/services/Pythonw.svg";
import PHP from "../../../public/assets/images/img/services/PHP.svg";
import PHPw from "../../../public/assets/images/img/services/PHPw.svg";
import ROR from "../../../public/assets/images/img/services/ROR.svg";
import RORw from "../../../public/assets/images/img/services/RORw.svg";
import blockchain from "../../../public/assets/images/img/services/blockchain.svg";
import Blockchainw from "../../../public/assets/images/img/services/blockchainw.svg";
import node from "../../../public/assets/images/img/services/node.svg";
import Nodew from "../../../public/assets/images/img/services/Nodew.svg";
import MeanStack from "../../../public/assets/images/img/services/MeanStack.svg";
import MeanStackw from "../../../public/assets/images/img/services/MeanStackw.svg";
import MernStack from "../../../public/assets/images/img/services/MernStack.svg";
import MernStackw from "../../../public/assets/images/img/services/MernStackw.svg";
import Angular from "../../../public/assets/images/img/services/Angular.svg";
import Angularw from "../../../public/assets/images/img/services/Angularw.svg";
import salesforce from "../../../public/assets/images/img/services/salesforce.svg";
import salesforcetw from "../../../public/assets/images/img/services/salesforce2.png";
import vector from "../../../public/assets/images/img/mobile_vector.png";
import BackToHomeImg from "../../../public/../public/assets/images/img/service_arrow2.png";
import serviceArrow from "../../../public/../public/assets/images/img/service_arrow.png";
import Rightarrow from "../../../public/assets/images/img/top-arrow1.png";
import styles from "./header.module.scss";

const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  const id = params.id;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openHamburgerIcon, setOpenHameburgeIcon] = useState(false);
  const [openServiceDrop, setOpenServiceDrop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openService, setOpenService] = useState(null);
  const toggleDropdown = () => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);
  const isActive = (path: string) => pathname === path;
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleService = (type: any) => {
    setOpenService((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} fixed-top bg-white customNavbar`}
      >
        <div className={`${styles.top_menu} ${styles.relative} container`}>
          <div className={styles.top_nav}>
            <nav
              className={`${styles.navbar} navbar navbar-expand-md  customNabvar`}
            >
              <button
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className={`navbar-toggler ${openHamburgerIcon ? "closeIcon" : ""}`}
                data-target="#navbarHeader"
                data-toggle="collapse"
                type="button"
                onClick={() => setOpenHameburgeIcon(!openHamburgerIcon)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link
                href="/"
                className={`${styles.MainLogo} navbar-brand`}
                onClick={() => {
                  sendEvent({
                    action: "nav_navigation",
                    category: "navigation",
                    label: "Home",
                  });
                }}
                aria-label="Home"
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  width={120}
                  height={50}
                  priority
                  className="d-inline-block align-top"
                />
              </Link>

              <div className={styles.vector_box}>
                <Link
                  href="/contact-us"
                  onClick={() => {
                    sendEvent({
                      action: "about_navigation",
                      category: "navigation",
                      label: "About Us",
                    });
                  }}
                  aria-label="About us"
                >
                  <Image
                    alt="Thoughtwin"
                    width={24}
                    height={17}
                    className={`${styles.first_logovector} img-responsive`}
                    src={vector}
                  />
                </Link>
              </div>
              <div
                className={`collapse navbar-collapse ${openHamburgerIcon ? "show" : ""}`}
                id="navbarNav"
              >
                <ul
                  className={`${styles.customNav} navbar-nav m-auto ${openServiceDrop ? `${styles.hide_nav_list}` : ""}`}
                >
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/about-us"
                      onClick={() => {
                        sendEvent({
                          action: "about_navigation",
                          category: "navigation",
                          label: "About Us",
                        });
                      }}
                      aria-label="About us"
                      className={`nav-link  ${isActive("/about-us") ? "active " : ""}`}
                    >
                      About us
                    </Link>
                  </li>
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/portfolios"
                      onClick={() => {
                        sendEvent({
                          action: "portfolio_navigation",
                          category: "navigation",
                          label: "Portfolio",
                        });
                      }}
                      aria-label="Portfolio"
                      className={`${isActive("/portfolios") ? "active" : ""} nav-link `}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/blogs"
                      onClick={() => {
                        sendEvent({
                          action: "blog_navigation",
                          category: "navigation",
                          label: "Blog",
                        });
                      }}
                      aria-label="Blogs"
                      className={`${pathname.startsWith("/blogs") ? "active" : ""} nav-link `}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/our-team"
                      onClick={() => {
                        sendEvent({
                          action: "our_team_navigation",
                          category: "navigation",
                          label: "Our Team",
                        });
                      }}
                      aria-label="Our Team"
                      className={`${isActive("/our-team") ? "active" : ""} nav-link`}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/career"
                      onClick={() => {
                        sendEvent({
                          action: "career_navigation",
                          category: "navigation",
                          label: "Careers",
                        });
                      }}
                      aria-label="Careers"
                      className={`${isActive("/career") ? "active" : ""} nav-link `}
                    >
                      Careers
                    </Link>
                  </li>
                  <li className={`${styles.top_navList} nav-item`}>
                    <Link
                      href="/pricing-calculator"
                      onClick={() => {
                        sendEvent({
                          action: "pricing_navigation",
                          category: "navigation",
                          label: "Cost Calculator",
                        });
                      }}
                      aria-label="Cost Calculator"
                      className={`${isActive("/pricing-calculator") ? "active" : ""} nav-link `}
                    >
                      Cost Calculator
                    </Link>
                  </li>
                  <li
                    className={`${styles.service_clickpage} nav-item dropdown position-relative dropdown-slide`}
                  >
                    <button
                      className={`nav-link ${isActive("") ? "active" : ""} dropdown-toggle d-inline-block bg-transparent border-0 ${styles.mobileNonebtn}`}
                      onClick={() => {
                        toggleDropdown();
                        sendEvent({
                          action: "sevices_navigation",
                          category: "click",
                          label: "Services",
                        });
                      }}
                      aria-expanded={open}
                      aria-haspopup="true"
                      type="button"
                    >
                      Services
                    </button>
                    <button
                      className={`${styles.serviceMobbtn} nav-link d-lg-none d-md-none d-block ${isActive("") ? "active" : ""} serviceDesktoview`}
                      onClick={() => {
                        setOpenServiceDrop(true);
                        sendEvent({
                          action: "sevices_navigation",
                          category: "click",
                          label: "Services",
                        });
                      }}
                      type="button"
                    >
                      Services
                    </button>
                    {open && (
                      <div
                        ref={dropdownRef}
                        className={`${styles.position_absolute} ${styles.show} dropdown-menu`}
                        id="service-dropcontent"
                        style={{ zIndex: 999, display: "block" }}
                      >
                        <div className={`${styles.drop_padding} row`}>
                          {/* Mobile App Section */}
                          <div className={`${styles.service_col} col-md-4`}>
                            <h3 className={styles.navheading}>
                              Mobile App Development
                            </h3>
                            <ul
                              className={`${styles.service_list} subMenuServices`}
                            >
                              {[
                                {
                                  href: "/android",
                                  img: Android,
                                  imgH: Androidw,
                                  label: "Android Development",
                                },
                                {
                                  href: "/ios",
                                  img: IOS,
                                  imgH: Iosw,
                                  label: "iOS Development",
                                },
                                {
                                  href: "/react-native",
                                  img: React,
                                  imgH: Reacts,
                                  label: "React Native Development",
                                },
                                {
                                  href: "/flutter",
                                  img: Flutter,
                                  imgH: Flutterw,
                                  label: "Flutter Development",
                                },
                              ].map(({ href, img, imgH, label }) => (
                                <li key={href}>
                                  <Link
                                    className={`${styles.change_hovercolor} dropdown-item`}
                                    href={href}
                                    onClick={() => {
                                      sendEvent({
                                        action: "service_navigation",
                                        category: "navigation",
                                        label: label,
                                      });
                                      closeDropdown();
                                    }}
                                    aria-label={label}
                                  >
                                    <div className={styles.width_display}>
                                      <Image
                                        src={img}
                                        className={`${styles.service_img} ${styles.display_hovernone}`}
                                        alt={label}
                                      />
                                      <Image
                                        src={imgH}
                                        className={`${styles.service_img} ${styles.display_hoverblock}`}
                                        alt={label}
                                      />
                                    </div>
                                    {label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Web App Section */}
                          <div className="col-md-8">
                            <h3 className={styles.navheading}>
                              Web Development
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <ul
                                  className={`${styles.service_list} subMenuServices`}
                                >
                                  {[
                                    {
                                      href: "/python",
                                      img: Python,
                                      imgH: Pythonw,
                                      label: "Python Development",
                                    },
                                    {
                                      href: "/php",
                                      img: PHP,
                                      imgH: PHPw,
                                      label: "PHP Development",
                                    },
                                    {
                                      href: "/ror",
                                      img: ROR,
                                      imgH: RORw,
                                      label: "Ruby On Rails",
                                    },
                                    {
                                      href: "/block-chain",
                                      img: blockchain,
                                      imgH: Blockchainw,
                                      label: "Blockchain Development",
                                    },
                                    {
                                      href: "/node-js",
                                      img: node,
                                      imgH: Nodew,
                                      label: "NodeJS Development",
                                    },
                                  ].map(({ href, img, imgH, label }) => (
                                    <li key={href}>
                                      <Link
                                        className={`${styles.change_hovercolor} dropdown-item`}
                                        href={href}
                                        onClick={() => {
                                          sendEvent({
                                            action: "service_navigation",
                                            category: "navigation",
                                            label: label,
                                          });
                                          closeDropdown();
                                        }}
                                        aria-label={label}
                                      >
                                        <div className={styles.width_display}>
                                          <Image
                                            src={img}
                                            className={`${styles.service_img} ${styles.display_hovernone}`}
                                            alt={label}
                                          />
                                          <Image
                                            src={imgH}
                                            className={`${styles.service_img} ${styles.display_hoverblock}`}
                                            alt={label}
                                          />
                                        </div>
                                        {label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul
                                  className={`${styles.service_list} subMenuServices`}
                                >
                                  {[
                                    {
                                      href: "/react-js",
                                      img: React,
                                      imgH: Reacts,
                                      label: "ReactJS Development",
                                    },
                                    {
                                      href: "/mean-stack",
                                      img: MeanStack,
                                      imgH: MeanStackw,
                                      label: "MEAN Stack Development",
                                    },
                                    {
                                      href: "/mern-stack",
                                      img: MernStack,
                                      imgH: MernStackw,
                                      label: "MERN Stack Development",
                                    },
                                    {
                                      href: "/angular",
                                      img: Angular,
                                      imgH: Angularw,
                                      label: "AngularJS Development",
                                    },
                                    {
                                      href: "/sales-force",
                                      img: salesforce,
                                      imgH: salesforcetw,
                                      label: "Salesforce Development",
                                    },
                                  ].map(({ href, img, imgH, label }) => (
                                    <li key={href}>
                                      <Link
                                        className={`${styles.change_hovercolor} dropdown-item `}
                                        href={href}
                                        onClick={() => {
                                          sendEvent({
                                            action: "service_navigation",
                                            category: "navigation",
                                            label: label,
                                          });
                                          closeDropdown();
                                        }}
                                        aria-label={label}
                                      >
                                        <div className={styles.width_display}>
                                          <Image
                                            src={img}
                                            className={`${styles.service_img} ${styles.display_hovernone}`}
                                            alt={label}
                                          />
                                          <Image
                                            src={imgH}
                                            className={`${styles.service_img} ${styles.display_hoverblock}`}
                                            alt={label}
                                          />
                                        </div>
                                        {label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Footer */}
                          <div className="col-md-12 p-0">
                            <div className={styles.workshop_box}>
                              <h3>Discovery workshop</h3>
                              <p>
                                Solutions to complement your company's goals on
                                a variety of platforms.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className={`${styles.work_link} nav-item pt-3 pl-xl-0 pl-lg-0 pl-md-3 pl-3 pl-md-0 ml-0 ml-md-4  d-md-none d-block mt-3`}
                  >
                    <Link
                      className="nav-link"
                      href="/contact-us"
                      onClick={() => {
                        sendEvent({
                          action: "contact_navigation",
                          category: "navigation",
                          label: "Contact Us",
                        });
                      }}
                      aria-label="Contact Us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* contact button */}
                <div
                  className={`${styles.contact_usbtndiv} ml-xl-0 ml-lg-0 ml-md-0 ml-3`}
                >
                  <Link
                    className="nav-link"
                    href="/contact-us"
                    onClick={() => {
                      sendEvent({
                        action: "contact_navigation",
                        category: "navigation",
                        label: "Contact Us",
                      });
                    }}
                    aria-label="Contact Us"
                  >
                    <button className={`${styles.contact_usbtn} btn`}>
                      Contact Us
                      <Image
                        src={Rightarrow}
                        className={styles.arrow_img}
                        alt="Right-arrow"
                      />
                      {/* <img src="/assets/img/vector-hover.png" className="arrow_img1" alt="Right-arrow"> */}
                    </button>
                  </Link>
                </div>
                {/* <!-- mobile view --> */}

                <div
                  className={`${styles.service_innerpage} ${!openServiceDrop ? styles.show_service_list : ""}`}
                >
                  <div>
                    <ul className={`${styles.appendme} breadcrumb`}>
                      <li
                        className={styles.back_tohome}
                        onClick={() => setOpenServiceDrop(false)}
                      >
                        <Image
                          src={BackToHomeImg}
                          alt="Arrow"
                          height={20}
                          width={20}
                        />
                      </li>
                    </ul>
                  </div>

                  <ul
                    className={`${styles.services_list} ${styles.servicelist_tabs}`}
                  >
                    <li
                      className={`${styles.add_developclick} ${styles.appendbtn} ${styles.hide1}`}
                      id="box"
                      onClick={() => {
                        toggleService("mobile");

                        sendEvent({
                          action: "mobile_app__navigation",
                          category: "navigation",
                          label: "Mobile app development",
                        });
                      }}
                    >
                      <h4>Mobile app Development</h4>
                      <Image
                        src={serviceArrow}
                        className={styles.service_arrowimg}
                        alt="software for android development"
                        width={10}
                        height={20}
                      />
                    </li>

                    {openService === "mobile" && (
                      <li
                        className={styles.services_listData}
                        id="serviceblock"
                      >
                        <ul className={styles.service_list}>
                          <li className={styles.android_icon}>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item p-0`}
                              href="/android"
                              onClick={() => {
                                sendEvent({
                                  action: "android_navigation",
                                  category: "navigation",
                                  label: "Android Development",
                                });
                              }}
                              aria-label="Android Development"
                            >
                              <div className={`${styles.width_display} mr-1`}>
                                <Image
                                  src={Android}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="software for android development"
                                />
                                <Image
                                  src={Androidw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="softwares for android development"
                                />
                              </div>
                              Android Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item pl-0`}
                              href="/ios"
                              onClick={() => {
                                sendEvent({
                                  action: "ios_navigation",
                                  category: "navigation",
                                  label: "Ios Development",
                                });
                              }}
                              aria-label="iOS Development"
                            >
                              <div className={`${styles.width_display} mr-2`}>
                                <Image
                                  src={IOS}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="xcode for windows"
                                />
                                <Image
                                  src={Iosw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="swift ios"
                                />
                              </div>
                              iOS Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item pl-0`}
                              href="/react-native"
                              onClick={() => {
                                sendEvent({
                                  action: "react_native_navigation",
                                  category: "navigation",
                                  label: "React Native Development",
                                });
                              }}
                              aria-label="React Native Development"
                            >
                              <div className={`${styles.width_display} mr-2`}>
                                <Image
                                  src={React}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="react native web "
                                />
                                <Image
                                  src={Reacts}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="react native js"
                                />
                              </div>
                              React Native Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/flutter"
                              onClick={() => {
                                sendEvent({
                                  action: "flutter_navigation",
                                  category: "navigation",
                                  label: "Flutter Development",
                                });
                              }}
                              aria-label="Flutter Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={Flutter}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="nodejs typescript"
                                />
                                <Image
                                  src={Flutterw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="node js fs"
                                />
                              </div>
                              Flutter Development
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}

                    <li
                      className={`${styles.web_developclick} ${styles.appendbtn1} ${styles.box1}`}
                      id="hide"
                      onClick={() => {
                        toggleService("web");
                        sendEvent({
                          action: "web_navigation",
                          category: "navigation",
                          label: "Web Development",
                        });
                      }}
                    >
                      <h4>web development</h4>
                      <Image
                        src={serviceArrow}
                        className={styles.service_arrowimg}
                        alt="software for android development"
                        width={10}
                        height={20}
                      />
                    </li>

                    {openService === "web" && (
                      <li
                        className={styles.services_listData1}
                        id="serviceblock"
                      >
                        <ul
                          className={`${styles.service_list} ${styles.serviceweb_list}`}
                        >
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/python"
                              onClick={() => {
                                sendEvent({
                                  action: "python_navigation",
                                  category: "navigation",
                                  label: "Python Development",
                                });
                              }}
                              aria-label="Python Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={Python}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="python backend"
                                />
                                <Image
                                  src={Pythonw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="python web development"
                                />
                              </div>
                              Python Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/php"
                              onClick={() => {
                                sendEvent({
                                  action: "php_navigation",
                                  category: "navigation",
                                  label: "Php Development",
                                });
                              }}
                              aria-label="PHP Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={PHP}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="php backend"
                                />
                                <Image
                                  src={PHPw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="laravel developer"
                                />
                              </div>
                              PHP Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/ror"
                              onClick={() => {
                                sendEvent({
                                  action: "ror_navigation",
                                  category: "navigation",
                                  label: "Ror Development",
                                });
                              }}
                              aria-label="Ruby On Rails"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={ROR}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="mern stack full form"
                                />
                                <Image
                                  src={RORw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="ruby on rails developer"
                                />
                              </div>
                              Ruby On Rails
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/block-chain"
                              onClick={() => {
                                sendEvent({
                                  action: "block_chain_navigation",
                                  category: "navigation",
                                  label: "Blockchain Development",
                                });
                              }}
                              aria-label="Blog Chain"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={blockchain}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="Blockchain Development"
                                />
                                <Image
                                  src={Blockchainw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="Blockchain Development"
                                />
                              </div>
                              Blockchain Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/angular"
                              onClick={() => {
                                sendEvent({
                                  action: "angular_navigation",
                                  category: "navigation",
                                  label: "Angular Development",
                                });
                              }}
                              aria-label="AngularJS Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={Angular}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="angular front end"
                                />
                                <Image
                                  src={Angularw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="angularjs developers"
                                />
                              </div>
                              AngularJS Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/node-js"
                              onClick={() => {
                                sendEvent({
                                  action: "node_navigation",
                                  category: "navigation",
                                  label: "Node Development",
                                });
                              }}
                              aria-label="NodeJS Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={node}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="nodejs backend"
                                />
                                <Image
                                  src={Nodew}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="nodeJS development"
                                />
                              </div>
                              NodeJS Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/react-js"
                              onClick={() => {
                                sendEvent({
                                  action: "react_navigation",
                                  category: "navigation",
                                  label: "React Development",
                                });
                              }}
                              aria-label="ReactJS Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={React}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="react developer"
                                />
                                <Image
                                  src={Reacts}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="react front end"
                                />
                              </div>
                              ReactJS Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/mean-stack"
                              onClick={() => {
                                sendEvent({
                                  action: "mean_navigation",
                                  category: "navigation",
                                  label: "Meanstack Development",
                                });
                              }}
                              aria-label="Mean Stack Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={MeanStack}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="mern stack courses"
                                />
                                <Image
                                  src={MeanStackw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="mern stack developer"
                                />
                              </div>
                              MEAN Stack development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`${styles.change_hovercolor} dropdown-item`}
                              href="/mern-stack"
                              onClick={() => {
                                sendEvent({
                                  action: "mern_navigation",
                                  category: "navigation",
                                  label: "Mernstack Development",
                                });
                              }}
                              aria-label="MERN Stack Development"
                            >
                              <div className={styles.width_display}>
                                <Image
                                  src={MernStack}
                                  className={`${styles.service_img} ${styles.display_hovernone}`}
                                  alt="mern stack projects"
                                />
                                <Image
                                  src={MeanStackw}
                                  className={`${styles.service_img} ${styles.display_hoverblock}`}
                                  alt="mern developer"
                                />
                              </div>
                              MERN Stack Development
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
