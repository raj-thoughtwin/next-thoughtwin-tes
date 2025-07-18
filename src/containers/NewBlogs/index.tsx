"use client";

import { Col, Row, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Loader from "../../components/Loader";
import Blogimg from "../../../public/assets/images/blogImage.svg";
import Time2 from "../../../public/assets/images/Time2.svg";
import Heart from "../../../public/assets/images/heart.svg";
import RedArrow from "../../../public/assets/images/redarrow.svg";
import Top from "../../../public/assets/images/chevron-up.svg";
import Search from "../../../public/assets/images/search.svg";
import Cross from "../../../public/assets/images/cross.svg";
import styles from "./newblogs.module.scss";

type Blog = {
  id: number;
  title: string;
  slug: string;
  prefix: string;
  description: any;
  term: string;
  make: string;
  estimatedReadingTime?: number;
  isManual: boolean;
  isApprove: boolean;
  createdAt: Date;
  updatedAt: Date;
  imageName: string;
  likes: number;
};

type NewBlogsProps = {
  blogsData: Blog[];
};

const NewBlogs = (blogsData: NewBlogsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadingTitle, setIsLoadingTitle] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Booking Application");
  const [show, setShow] = useState(false);
  const [likedBlogs, setLikedBlogs] = useState<string[]>([]);

  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>(blogsData.blogsData);

  const categories = ["All", ...new Set(blogs.map((b) => b.prefix))];

  const clearSearch = () => {
    setSearchTerm("");
  };

  const toggleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    blog: Blog
  ) => {
    e.stopPropagation();
    const isAlreadyLiked = likedBlogs.includes(blog.title);
    const newLikes = isAlreadyLiked ? blog.likes - 1 : blog.likes + 1;

    try {
      const res = await fetch("/api/admin/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: blog.id, likes: newLikes }),
      });

      if (!res.ok) {
        throw new Error("Failed to update like");
      }

      const resJson = await res.json();
      const updatedLikes = resJson?.updatedEmailData?.likes;

      if (updatedLikes === undefined) {
        console.error("Updated likes missing from response:", resJson);
        return;
      }

      setLikedBlogs((prev) =>
        isAlreadyLiked ?
          prev.filter((title) => title !== blog.title)
        : [...prev, blog.title]
      );

      setBlogs((prevBlogs) =>
        prevBlogs.map((b) =>
          b.id === blog.id ? { ...b, likes: updatedLikes } : b
        )
      );
    } catch (error) {
      console.error("Like error:", error);
    }
  };

  const groupedBlogs: Record<string, Blog[]> = blogs.reduce(
    (acc: any, blog: any) => {
      if (!acc[blog.prefix]) {
        acc[blog.prefix] = [];
      }
      acc[blog.prefix].push(blog);
      return acc;
    },
    {}
  );

  const filteredGroupedBlogs = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return Object.keys(groupedBlogs).reduce(
      (acc: Record<string, Blog[]>, key) => {
        if (selectedCategory !== "All" && key !== selectedCategory) return acc;
        const filteredBlogs = groupedBlogs[key].filter((blog) =>
          blog.title.toLowerCase().includes(lowerSearch)
        );
        if (filteredBlogs.length > 0) {
          acc[key] = filteredBlogs;
        }
        return acc;
      },
      {}
    );
  }, [searchTerm, selectedCategory, groupedBlogs]);

  const handleTitleSubmit = async (blogItem: Blog) => {
    router.push(`/blogs/${blogItem.slug}`);
  };

  function formatDate(dateStr: any) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />

      <section>
        <div className={styles.bannerBlog}>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <h2>Blog Posts</h2>
              </Col>
              <Col md={6}>
                <div className={styles.blogImgBox}>
                  <Image src={Blogimg} alt="blog banner" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className={`${styles.TabSection} CustomTabArea`}>
        <Container>
          <Row>
            <Col sm={4} md={4} xl={3}>
              <div className={styles.pillsOuter}>
                <h4>Categories</h4>
                <nav className={styles.sideNav}>
                  <ul>
                    {Object.keys(groupedBlogs).map((prefix, index) => (
                      <li
                        key={index}
                        className={`${styles.activeSidenav} ${activeCategory === prefix ? styles.active : ""}`}
                      >
                        <Link
                          href={`${prefix.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveCategory(prefix)}
                          aria-label="Blog Category"
                        >
                          {prefix}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="BlogDropdown">
                  <select
                    value={activeCategory}
                    onChange={(e) => {
                      const selected = e.target.value;
                      setActiveCategory(selected);
                      const sectionId = selected
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      const targetEl = document.getElementById(sectionId);
                      if (targetEl) {
                        targetEl.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {Object.keys(groupedBlogs).map((prefix, index) => (
                      <option
                        key={index}
                        value={prefix}
                        className={`${activeCategory === prefix ? styles.active : ""}`}
                      >
                        {prefix}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Col>

            <Col sm={8} md={8} xl={9}>
              <div className={styles.tabOuterArea}>
                <div className={styles.search_container}>
                  <select
                    className={styles.category_select}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <div className={styles.input_wrapper}>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={styles.search_input}
                      placeholder="Search blog..."
                    />
                    {searchTerm && (
                      <button
                        className={styles.clear_button}
                        onClick={clearSearch}
                      >
                        <Image src={Cross} width={14} height={14} alt="clear" />
                      </button>
                    )}
                  </div>

                  <button className={styles.search_button}>
                    <Image src={Search} width={18} height={18} alt="search" />
                  </button>
                </div>

                {Object.entries(filteredGroupedBlogs).length > 0 ?
                  Object.entries(filteredGroupedBlogs).map(
                    ([prefix, blogs], index) => (
                      <section
                        id={`${prefix.toLowerCase().replace(/\s+/g, "-")}`}
                        className={styles.tabContentArea}
                        key={index}
                      >
                        <h2>{prefix}</h2>
                        <Row>
                          {blogs.slice(0, 6).map((item, i) => {
                            const isLiked = likedBlogs.includes(item.title);
                            return (
                              <Col sm={6} md={6} lg={6} xl={4} key={i}>
                                <div
                                  className={styles.TabBox}
                                  onClick={() => handleTitleSubmit(item)}
                                >
                                  <div className={styles.ImgeBox}>
                                    <Image
                                      src={`/assets/images/blogImages/${item.imageName}`}
                                      width={100}
                                      height={150}
                                      alt="blog"
                                      unoptimized
                                    />
                                  </div>
                                  <div className={styles.CenterBox}>
                                    <div className={styles.DateBox}>
                                      <h6>{formatDate(item.createdAt)}</h6>
                                      {item.estimatedReadingTime && (
                                        <div className={styles.DurationBox}>
                                          <Image
                                            src={Time2}
                                            alt="time"
                                            width={14}
                                            height={14}
                                          />
                                          {`${item.estimatedReadingTime} min read`}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <h3>{item.title}</h3>
                                  <div className={styles.bottomBox}>
                                    <div className={styles.leftBox}>
                                      <button
                                        type="button"
                                        style={{
                                          all: "unset",
                                          cursor: "pointer",
                                        }}
                                        onClick={(e) => toggleLike(e, item)}
                                      >
                                        <Image
                                          src={Heart}
                                          alt="like"
                                          width={17}
                                          style={{
                                            filter:
                                              isLiked ?
                                                "invert(19%) sepia(99%) saturate(7483%) hue-rotate(355deg) brightness(98%) contrast(112%)"
                                              : "none",
                                          }}
                                        />
                                      </button>
                                      {item.likes}
                                    </div>
                                    <div className={styles.rightBox}>
                                      <button
                                        type="button"
                                        style={{
                                          all: "unset",
                                          cursor: "pointer",
                                        }}
                                        disabled={loadingTitle === item.title}
                                      >
                                        {loadingTitle === item.title ?
                                          <Loader />
                                        : <>
                                            View More{" "}
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
                              </Col>
                            );
                          })}
                        </Row>
                        <div className={styles.btnBox}>
                          <button>View More</button>
                        </div>
                      </section>
                    )
                  )
                : <div className={styles.noResult}>
                    <p>No category found for "{searchTerm}"</p>
                  </div>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            padding: "10px 10px",
            background: "#ff0000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <Image src={Top} alt="arrow" width={24} height={24} />
        </button>
      )}

      <Footer />
    </>
  );
};

export default NewBlogs;
