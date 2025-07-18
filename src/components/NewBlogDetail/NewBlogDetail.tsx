"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import styles from "../../app/(pages)/blogs/[slug]/blogdetail.module.scss";
import Time from "../../../public/assets/images/Time.svg";
import Time2 from "../../../public/assets/images/Time2.svg";
import Introimg from "../../../public/assets/images/IntroImg.svg";
import Heart from "../../../public/assets/images/heart.svg";
import RedArrow from "../../../public/assets/images/redarrow.svg";
import Blogarrow from "../../../public/assets/images/blogarrow.svg";
import Link from "next/link";
import Loader from "../../components/Loader";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import { copyUrl } from "@/utility/copyUrl";
import ShareModal from "../Sharemodal";
import ShareIcon from "../../../public/assets/images/portfolionew/share.svg";
import ClockIcon from "../../../public/assets/images/portfolionew/clock.svg";
import HeartIcon from "../../../public/assets/images/portfolionew/Heart.svg";
interface Blog {
  id: number;
  title: string;
  slug: string;
  prefix: string;
  term: string;
  make: string;
  introduction?: string;
  technologyJustification?: string;
  thoughtwinApproach?: string;
  featureHighlights?: string[];
  caseStudy?: string;
  faq?: { question: string; answer: string }[];
  estimatedReadingTime?: number;
  imageName: string;
  createdAt: string;
}
interface NewBlogDetailProps {
  slug: string;
}

interface BlogDetailProps {
  blog: Blog | null;
}

export default function BlogDetail({ slug }: NewBlogDetailProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loadingTitle, setIsLoadingTitle] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [latestBlog, setLatestBlog] = useState<Blog[]>([]);
  const [copied, setCopeid] = useState(false);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(true);
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/admin/blog?slug=${slug}`);
        const data = await res.json();

        setBlog(data);

        // ✅ If required data is missing, call Gemini generation
        if (
          data &&
          (!data.estimatedReadingTime ||
            !data.introduction ||
            !data.technologyJustification ||
            !data.thoughtwinApproach)
        ) {
          const finalValues = {
            id: data.id,
            title: data.title,
            prefix: data.prefix,
            term: data.term,
            make: data.make,
          };

          await fetch("/api/admin/gemini", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalValues),
          });

          // ✅ Re-fetch the blog to get the newly generated content
          const updatedRes = await fetch(`/api/admin/blog?slug=${slug}`);
          const updatedData = await updatedRes.json();
          setBlog(updatedData);
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    async function latestBlogs() {
      try {
        const res = await fetch(
          `/api/admin/blog?limit=3&excludeSlug=${blog?.slug}&random=true`
        );
        const data = await res.json();
        setLatestBlog(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoadingBlogs(false);
      }
    }

    latestBlogs();
  }, [blog?.slug]);

  const latestBlogs = blogs
    .filter((b) => b.slug !== blog?.slug)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  const handleClick = async (blogItem: Blog) => {
    setIsLoadingTitle(blogItem.title);
    try {
      router.push(`/blogs/${blogItem.slug}`);
    } catch (err) {
    } finally {
      setIsLoadingTitle(null);
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <section className={styles.BlogDetailArea}>
        {loading ?
          <div className={styles.skeletonContainer}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonParagraph}></div>
            <div className={styles.skeletonParagraph}></div>
          </div>
        : blog ?
          <Container>
            <div className={styles.headingBox}>
              <div className={`${styles.portfolio_header} mb-4`}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Link href="/blogs" aria-label="Blogs">
                    <span>
                      <Image
                        src={Blogarrow}
                        alt="time"
                        width={14}
                        height={14}
                      />
                    </span>
                    Back to Blogs
                  </Link>
                  <div className={styles.shareimg}>
                    <button onClick={handleShow}>
                      <Image src={ShareIcon} alt="" />
                    </button>
                    <ShareModal show={show} handleClose={handleClose} />
                  </div>
                </div>

                <h2>
                  {blog.prefix} {blog.term} Solutions Using {blog.make} |
                  Thoughtwin
                  {/* <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      copyUrl(window.location.href, copied, setCopeid);
                    }}
                    className="clipboard ms-2"
                    aria-label="Copy to clipboard"
                    title="Copy to clipboard"
                  >
                     {!copied && <i
                      className={`${styles.copyicon} fa-regular fa-copy`}
                      style={{ fontSize: "22px", verticalAlign: "super" }}
                    ></i>}
                     
                     {copied && <i className={`${styles.checkgreen} fa-solid fa-circle-check `}></i>}
                  </a> */}
                  <span>
                    <ul className={styles.soc_icon}>
                      {/* <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          copyUrl(window.location.href, copied, setCopeid);
                        }}
                        className="clipboard"
                        aria-label="Copy to clipboard"
                        title="Copy to clipboard"
                      >
                        <i
                          className="fa-regular fa-copy"
                          style={{ fontSize: "16px", padding: "0px" }}
                        ></i>
                      </a>
                    </li> */}
                    </ul>
                  </span>
                </h2>
                <div
                  className={`${styles.minread} d-flex align-items-center justify-content-between`}
                >
                  {/* <div className={styles.DurationBox}>
                    <Image src={Time} alt="time" width={14} height={14} />
                    {blog.estimatedReadingTime || 10} min read
                  </div> */}
                  <div>
                    <Image
                      src={ClockIcon}
                      alt=""
                      className="align-bottom me-1"
                    />
                    <span>{blog.estimatedReadingTime || 10} min read</span>
                  </div>
                  <div className={styles.heart_div}>
                    <Image src={HeartIcon} alt="" width={21} height={21} />
                    <div className={styles.border_line}></div>
                    <p className="m-0">242</p>
                  </div>
                </div>
              </div>
              <div className={styles.Scalable}>
                <h4>
                  Build Scalable {blog.term} with {blog.make} for Your{" "}
                  {blog.prefix} Needs
                </h4>
                <p>
                  Thoughtwin delivers end-to-end {blog.term} for {blog.prefix}{" "}
                  using {blog.make} scalable, secure, and future-ready. Partner
                  with top-tier developers today.
                </p>
                <div className={styles.ImageBox}>
                  <Image
                    src={`/assets/images/blogImages/${blog.imageName}`}
                    alt="BlogImage"
                    width={1000}
                    height={422}
                  />
                </div>
              </div>

              <div className={styles.Introduction}>
                <Row className="align-items-start">
                  <Col sm={8}>
                    {[
                      {
                        title: `Introduction: The Real-World Need for ${blog.prefix} ${blog.term}`,
                        content: blog.introduction,
                      },
                      {
                        title: `Why ${blog.make} is the Ideal Technology for ${blog.prefix}`,
                        content: blog.technologyJustification,
                      },
                      {
                        title: `Our Approach at Thoughtwin`,
                        content: blog.thoughtwinApproach,
                      },
                      {
                        title: `Feature Highlights for ${blog.prefix} ${blog.term}`,
                        content: blog.featureHighlights,
                      },
                      {
                        title: `Case Study`,
                        content: blog.caseStudy,
                      },
                      {
                        title: `FAQ Section`,
                        content: blog.faq,
                      },
                    ].map(
                      (section, index) =>
                        section.content && (
                          <div className={styles.InteroLeftText} key={index}>
                            <h2>{section.title}</h2>
                            {Array.isArray(section.content) ?
                              typeof section.content[0] === "object" ?
                                section.content.map((item: any, i: number) => (
                                  <div key={i} className={styles.grayText}>
                                    <strong>Q: {item.question}</strong>
                                    <p>
                                      <span>A:</span> {item.answer}
                                    </p>
                                  </div>
                                ))
                              : <ul>
                                  {(section.content as string[]).map(
                                    (item, i) => (
                                      <li key={i}>{item}</li>
                                    )
                                  )}
                                </ul>

                            : section.content
                                .split("\n")
                                .map((line, i) => <p key={i}>{line.trim()}</p>)
                            }
                          </div>
                        )
                    )}
                  </Col>
                  <Col sm={4} style={{ position: "sticky", top: "76px" }}>
                    <div className={styles.IntroRight}>
                      <div className={styles.ImgBox}>
                        <Image src={Introimg} alt="" height={225} />
                        <div className={styles.TextBox}>
                          <h3>Estimate Your Costs with</h3>
                          <h2>Our Calculators</h2>
                          <Link
                            href="/pricing-calculator"
                            aria-label="Pricing Calculator"
                          >
                            <button>Get your calculation</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={`${styles.BlogSliderDeTail}`}>
              <h2>Recent Blogs</h2>
              <div
                className={`${styles.sliderDetailOuter} blodSlider container`}
              >
                <Slider {...settings}>
                  {latestBlog.map((b) => {
                    const randomLikes = Math.floor(Math.random() * 1000) + 1;

                    return (
                      <div
                        key={b.id}
                        className={styles.BlogCard}
                        onClick={() => handleClick(b)}
                      >
                        <div className={styles.ImageBox}>
                          <Image
                            src={`/assets/images/blogImages/${b.imageName}`}
                            alt={b.title}
                            width={300}
                            height={180}
                            unoptimized
                          />
                        </div>
                        <div className={styles.ContentBox}>
                          {b.estimatedReadingTime && (
                            <div className={styles.topInner}>
                              <h6>{new Date(b.createdAt).toDateString()}</h6>
                              <div className={styles.Meta}>
                                <Image
                                  src={Time2}
                                  alt="time"
                                  width={14}
                                  height={14}
                                />
                                {b.estimatedReadingTime} min read
                              </div>
                            </div>
                          )}
                          <h3 className={styles.midHead}>{b.title}</h3>
                          <div className={styles.Actions}>
                            <div className={styles.Left}>
                              <Image src={Heart} alt="like" width={17} />
                              <span>{randomLikes}</span>
                            </div>
                            <div className={styles.Right}>
                              <button
                                type="button"
                                style={{ all: "unset", cursor: "pointer" }}
                              >
                                {loadingTitle === b.title ?
                                  <Loader />
                                : <>
                                    <span>View More</span>{" "}
                                    <Image
                                      src={RedArrow}
                                      alt="arrow"
                                      width={24}
                                      height={24}
                                    />
                                  </>
                                }
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </Container>
        : <p>Blog not found</p>}
      </section>
      <Footer />
    </div>
  );
}
