"use client";
import Image from "next/image";
import Message from "../../../public/assets/images/img/messge.svg";
import Close from "../../../public/assets/images/close.svg";
import styles from "./ChatButtons.module.scss";
import { ChatButtonsProps } from "@/types/chatTypes";

export default function ChatButtons({ isOpen, toggleChat }: ChatButtonsProps) {
  return (
    <>
      <button
        className={`${styles.chatboxOpen} ${isOpen ? styles.hidden : ""}`}
        onClick={toggleChat}
      >
        <Image src={Message} alt="chat" />
      </button>
      <button
        className={`${styles.chatboxClose} ${!isOpen ? styles.hidden : ""}`}
        onClick={toggleChat}
      >
        <Image src={Close} alt="close" />
      </button>
    </>
  );
}