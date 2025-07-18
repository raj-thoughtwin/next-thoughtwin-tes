"use client";

import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useScrollToTop } from "@/hook/useScrollToTop";
import { sendEvent } from "@/lib/ga";
import { CareersJobPosting } from "@/types/types";
import ApplyNowModal from "@/components/ApplyNowModal";
import styles from "./careers.module.scss";

type CareersProps = {
  jobPostings: CareersJobPosting[];
};

const Careers = ({ jobPostings }: CareersProps) => {
  const[showModal, setShowModal] = useState(false);
  useScrollToTop();
  const perks = [
    {
      id: 1,
      img: "/assets/images/img/career/1.png",
      title: "5 Days a week",
      description:
        "We believe in improved job satisfaction and morale. The five-day week gives you a better work-life balance and more time with family and friends.",
    },
    {
      id: 2,
      img: "/assets/images/img/career/3.png",
      title: "Rewards",
      description:
        "Well, we care for your 'Smile' we create a moment of yours with shopping vouchers, team lunch, outings, and a letter of thanks.",
    },
    {
      id: 3,
      img: "/assets/images/img/career/4.png",
      title: "Flexible Timings",
      description:
        "In the Thoughtwin you are not tied to their desk to work for several hours. We have flexible working hours and work environment, amazing work culture with bean bags, open terrace floor plans, and extra activities, etc., and also let you fit the rest of your life with your work.",
    },
  ];

  const images = [
    { src: "/assets/images/img/career/people.png", alt: "People" },
    { src: "/assets/images/img/career/Careenbanner.webp", alt: "Career Banner" },
    { src: "/assets/images/img/career/careen_banner4.jpg", alt: "Career Banner 4" },
    { src: "/assets/images/img/career/careen_banner2.jpg", alt: "Career Banner 2" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleShow = (title: string) => {
    setTitle(title);
    setIsModalOpen(true);
  };

  const next = () => {
    setSelectedItem((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setSelectedItem((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className={`${styles.current_opening} ${styles.bg_white}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Current Opening</h2>
          </div>

          {/* Accordion */}
          <div className="col-md-12">
            <div className={`${styles.set_acc} mt-md-5 career_accordian`} id="accordion">
              {jobPostings.map((job, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.accordian_name}>
                      <div className={styles.card_header} id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className={`${styles.btn_link1} ${styles.accordian_head} btn accoedianbtn ${openIndex === index ? "" : "collapsed"}`}
                            onClick={() => {
                              toggleAccordion(index);
                              sendEvent({
                                action: "accordian_navigation",
                                category: "click",
                                label: `${job.title}`,
                              });
                            }}
                            aria-expanded={openIndex === index}
                            aria-controls={`collapse${index}`}
                            style={{ width: "100%", textAlign: "left" }}
                          >
                            <h4>{job.title}</h4>
                            <span>
                              {job.location} | {`Experience : ${job.experience}`} | {`Position : ${job.position}`}
                            </span>
                          </button>
                        </h5>
                      </div>

                      {openIndex === index && (
                        <div id={`collapse${index}`} className="collapse show applyBtn" aria-labelledby="headingOne">
                          <div className={`${styles.card_body} card-body`}>
                            <h3>Job Description</h3>
                            <div>{documentToReactComponents(job.description)}</div>

                            <div className="row">
                              <div className="col-md-12 text-end">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#applyModal"
                                  onClick={() => {
                                    handleShow(job.title);
                                    sendEvent({
                                      action: "apply_now_click",
                                      category: "click",
                                      label: "Apply Now",
                                    });
                                  }}
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* modal submit */}
          <ApplyNowModal closeModal={handleCloseModal} show={isModalOpen} title={title} />
        </div>
      </section>
      {/* Become a Part */}
      <section className={styles.career_bgpage}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 text-center">
              <h1>Become a Part of ThoughtWin Family</h1>
              <p className="mt-4 mb-0">
                Working at Thoughtwin means more than just a job. As part of our work-life balance, we respect your priorities outside of
                work. We recognize your abilities and make it possible for you to maximize your potential while working here. You will have
                the opportunity to work with a multinational company in an Indian environment with local mentoring.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel */}
      <section className={`${styles.build_career}  slidercs`}>
        <div className="container">
          <div className="row">
            {/* Carousel */}

            <div className="col-md-6 col-lg-6 position-relative">
              <div className={`${styles.sliderBox} sliderDot`}>
                <Carousel
                  showArrows={false}
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  selectedItem={selectedItem}
                  onChange={(index) => setSelectedItem(index)}
                >
                  {images.map((img, idx) => (
                    <div key={idx} className={styles.ImgBox}>
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </Carousel>
                {/* External arrows below carousel */}
                <div className="text-center mt-3 controlBtn">
                  <button onClick={prev} className="control_prev" aria-label="Previous">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button onClick={next} className="control_next ml-3" aria-label="Next">
                    <span aria-label="Next"> ›</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className={`${styles.job_question} mt-md-5`}>
                <h2>Build your career with us</h2>
                <p>
                  ThoughtWin IT Solutions offers a vibrant environment, where your talent, expertise and knowledge get a great chance to
                  come to the fore. Compensation that is on par with the best in the industry, and performance-oriented incentives are but
                  some of the benefits you get when you become a member of the ThoughtWin family. <br />
                  <br />
                  Continuous learning, knowledge sharing and empowerment are fueled by ThoughtWin's culture that is built to instill a
                  feeling of belonging and camaraderie among the ThoughtWin's family members. <br />
                  <br />
                  For an interested and suitable person who wants to express his idea and innovations, ThoughtWin IT Solutions is an
                  absolute spot to become a marvelous professional in the web technology world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* offer careers */}
      <section className={styles.career_offer}>
        <div className="container">
          <div className="text-center">
            <h2>We offer careers, not jobs</h2>
            <p>
              In today's competitive and fast-changing business environment, Thoughtwin is looking for talented individuals who are
              motivated by a career challenge and enjoy <br />
              working in a dynamic and friendly environment.
            </p>
          </div>
        </div>
      </section>
      {/* Job You Are Looking */}
      <section className={styles.find_job}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-md-none d-inline-block">
              <div className={styles.find_job_img}>
                <img src="/assets/images/img/career/freelance.png" alt="Job" />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className={`${styles.job_question} mt-md-5 pt-md-5 mt-4`}>
                <h3 className="d-md-block d-none">
                  Couldn’t find <br />
                  the job you are <br />
                  looking for?
                </h3>

                <p className={styles.MailText}>Send your resume on <b><a href="mailto:hr@thoughtwin.com">hr@thoughtwin.com</a></b></p>
              </div>
            </div>

            <div className="col-md-6 col-12 d-md-inline-block d-none">
              <div className={styles.find_job_img}>
                <img src="/assets/images/img/career/freelance.png" alt="Job" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* perk section */}
      <section className={styles.perk_join}>
        <div className="container">
          <h2 className="text-center mb-5 mt-3">Perks of Joining ThoughtWin</h2>

          <div className="row">
            {perks.map((perk, index) => (
              <div key={index} className="col-md-4 col-12">
                <div className={styles.perk_detail}>
                  <div className={styles.perk_img}>
                    <img src={perk.img} alt={perk.title} width={45} height={45} />
                  </div>
                  <h5>{perk.title}</h5>
                  <p>{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Careers;
