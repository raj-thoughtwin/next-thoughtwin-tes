"use client";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { copyUrl } from "@/utility/copyUrl";
import CopyLink from "../../../public/assets/images/share/copy-link.svg";
import Email from "../../../public/assets/images/share/email.svg";
import Messenger from "../../../public/assets/images/share/messenger.svg";
import Whatsapp from "../../../public/assets/images/share/whatsapp.svg";
import Twitter from "../../../public/assets/images/share/twitter.svg";
import Facebook from "../../../public/assets/images/share/facebook.svg";
import styles from "./share.module.scss";

export default function ShareModal({ show, handleClose }: any) {
  const [copied, setCopeid] = useState(false);
  return (
    <Modal show={show} onHide={handleClose} centered className="share_modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Share this Blog</h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <div className="col-md-6 col-6">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                copyUrl(window.location.href, copied, setCopeid);
              }}
              className="clipboard ms-2 Link_border"
              aria-label="Copy to clipboard"
              title="Copy to clipboard"
            >
              <Image src={CopyLink} alt="CopyLink" />
              <p>Copy Link</p>

              {copied && (
                <i
                  className={`${styles.checkgreen} fa-solid fa-circle-check `}
                ></i>
              )}
            </Link>
          </div>
          <div className="col-md-6 col-6">
            <Link
              href="mailto:info@thoughtwin.com"
              className="Link_border"
              aria-label="Email"
            >
              <Image src={Email} alt="Email" />
              <p>Email</p>
            </Link>
          </div>
          <div className="col-md-6 col-6">
            <Link href="" className="Link_border" aria-label="Messenger">
              <Image src={Messenger} alt="Messenger" />
              <p>Messenger</p>
            </Link>
          </div>
          <div className="col-md-6 col-6">
            <Link
              href="https://www.instagram.com/thoughtwin__/?hl=en"
              className="Link_border"
              aria-label="Whatsapp"
            >
              <Image src={Whatsapp} alt="Whatsapp" />
              <p>Whatsapp</p>
            </Link>
          </div>
          <div className="col-md-6 col-6">
            <Link href="" className="Link_border mb-0" aria-label="Twitter">
              <Image src={Twitter} alt="Twitter" />
              <p>Twitter</p>
            </Link>
          </div>
          <div className="col-md-6 col-6" aria-label="Facebook">
            <Link
              href="https://www.facebook.com/thoughtwin/"
              className="Link_border mb-0"
            >
              <Image src={Facebook} alt="Facebook" />
              <p>Facebook</p>
            </Link>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
