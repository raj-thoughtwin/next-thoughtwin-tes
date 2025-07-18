import Image from "next/image";
import Link from "next/link";
import { sendEvent } from "@/lib/ga";
import { HireDeveloperSectionProps } from "@/types/types";
import styles from "./hiredevelopersection.module.scss";

const HireDeveloperSection = ({
  hiredSectionData,
}: HireDeveloperSectionProps) => {
  return (
    <>
      {hiredSectionData.map((section, index) => (
        <section className={styles.sec_blockchain_dev} key={index}>
          <div className={styles.blockchain_container}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className={styles.hire_dev_block}>
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className={styles.hire_dev_text}>
                    <h2>{section.heading}</h2>
                    <h5>{section.subheading}</h5>
                    <p>{section.description}</p>
                    <Link
                      href={section.button.link}
                      onClick={() => {
                        sendEvent({
                          action: "contact_navigation",
                          category: "navigation",
                          label: `${section.button.label} Button`,
                        });
                      }}
                      aria-label="Contact Us"
                    >
                      {section.button.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default HireDeveloperSection;
