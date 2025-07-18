"use client";

import Link from "next/link";
import Image from "next/image";
import { sendEvent } from "@/lib/ga";
import ClientRound from "../../../public/assets/images/img/client-round.png";
import styles from "./client.module.scss";

const Client = () => {
  return (
    <div>
      <section className={`${styles.client_section} container`}>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.round_pinkimagdiv2}>
              <Image
                src={ClientRound}
                alt="technology round"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles.client_texthead}>Clients who trust us</h3>
          <p
            className={`${styles.client_text} ${styles.major_textnew} pb-0 mb-0`}
          >
            Our main values were indeed quality, compromise, and integrated
            teams, that also help companies share their objectives and goals in
            a controlled, fast, and accurate manner. Thoughtwin is one of the
            most service companies on the market.
          </p>
        </div>

        <div className="row  mt-4">
          {[1, 2, 3].map((num) => (
            <div className={`${styles.client_imgdiv} col-md-12`} key={num}>
              <div className={styles[`client_img${num}`]}>
                <img
                  src={`/assets/images/img/trust/${num}.png`}
                  className={styles.moblie_client}
                  alt={`client ${num}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="row ">
          <div className="col-md-12 text-center">
            <Link
              href="/portfolios"
              onClick={() => {
                sendEvent({
                  action: "view_navigation",
                  category: "navigation",
                  label: "View All",
                });
              }}
              aria-label="Portfolios"
            >
              <button className={styles.view_allbtn}>View All</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
