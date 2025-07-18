"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { copyUrl } from "@/utility/copyUrl";
import { Blog } from "@/types/types";
import { useScrollToTop } from "@/hook/useScrollToTop";
import ProjectEstimateSection from "@/components/ProjectEstimateSection";
import { serviceFormValidationSchema } from "@/validation/validationSchema";
import { IosProjectEstimateSectionData } from "@/constants/IosServicesData";
import styles from "./blogdetail.module.scss";

export interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  const [copied, setCopeid] = useState(false);
  const formattedDate = new Date(blog.createdAt || "").toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
    }
  );

  useScrollToTop();
  const tags =
    blog?.authorData?.fields?.tag ?
      blog.authorData.fields.tag.split(",").map((tag) => tag.trim())
    : [];

  // Use original paragraph document instead of rebuilding it
  let paragraph: Document | null = null;

  if (blog?.paragraph) {
    paragraph = blog.paragraph as Document;
  }

  const formattedFullDate = new Date(blog.createdAt || "").toLocaleDateString(
    "en-GB"
  );
  const profileImage =
    blog?.authorData?.fields?.profileImg ?
      `https:${blog?.authorData?.fields?.profileImg?.fields?.file?.url}`
    : "/assets/images/img/pro_img.png";

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <strong
          style={{ color: "rgb(0, 0, 0)", backgroundColor: "transparent" }}
          className="fw-bold"
        >
          {text}
        </strong>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title, description } = node.data.target.fields;
        const imageUrl =
          file?.url?.startsWith("//") ? `https:${file.url}` : file.url;
        return (
          <div className="embedded-asset">
            <Image
              src={imageUrl}
              alt={description || title || "Embedded Image"}
              width={800}
              height={300}
            />
          </div>
        );
      },
    },
  };

  return (
    <>
      <div className={styles.sigblog_ban}>
        <h1>ThoughtWin Blog</h1>
        <p>
          On product management, engineering, design, culture and many more..
        </p>
      </div>

      <div className="container">
        <div className="ban_img">
          <div className={styles.sin_blog}>
            <h1>
              {(blog?.heading &&
                blog?.heading?.content &&
                blog?.heading?.content[0]?.content[0]?.value) ||
                ""}
            </h1>
            <div className={styles.names_blog}>
              <ul className={styles.leftstyle}>
                <li>
                  <Image
                    src={profileImage}
                    alt={blog.profile_image_alt || "profileImage"}
                    width={40}
                    height={40}
                  />
                </li>
                <li>{blog?.authorData?.fields?.name}</li>
                <li>{formattedDate}</li>
              </ul>
              <ul className={styles.soc_icon}>
                {copied && <span>URL copied!</span>}
                <li>
                  <Link
                    href=""
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
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cen_img">
              <div
                style={{
                  backgroundImage: `url(https:${blog.image?.fields?.file?.url})`,
                  height: "505px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_di}>
        <div className={styles.outerBox}>
          <div
            className={`${styles.left_sidebar} aos-init aos-animate`}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className={styles.content}>
              <Image
                src={profileImage}
                alt={blog.profile_image_alt || "profileImage"}
                width={200}
                height={200}
              />
              <h2>{blog?.authorData?.fields?.name}</h2>
              <p>{blog?.authorData?.fields?.description}</p>
            </div>
          </div>

          <div className="con_sec">
            <div className={styles.para_sec}>
              <div id="editor" className="video-wrapper">
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description || "" }}
                />
              </div>

              <div className="tag">
                {paragraph && documentToReactComponents(paragraph, options)}
              </div>

              <h6>Created: {formattedFullDate}</h6>
              <h5 className="blog_tag">Tags:</h5>
              <div>
                {tags.map((tag, index) => (
                  <small key={index}>
                    {" "}
                    <button key={index} className={styles.tagbtn}>
                      {tag}
                    </button>{" "}
                  </small>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProjectEstimateSection
          validationSchema={serviceFormValidationSchema}
          projectEstimateSectionData={IosProjectEstimateSectionData}
        />

        {/* <ProjectEstimateSection
          validationSchema={serviceFormValidationSchema}
          projectEstimateSectionData={IosProjectEstimateSectionData}
        /> */}
      </div>
    </>
  );
};

export default BlogDetail;
