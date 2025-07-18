"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Apsd from "../../../public/assets/images/img/a_psd.png";
import One from "../../../public/assets/images/img/chat/1.png";
import Send from "../../../public/assets/images/img/send.svg";
import styles from "./ChatBot.module.scss";
import ChatButtons from "@/components/ChatButtons";
import { API_ENDPOINT } from "@/constants/api.routes";
import { ChatBotResponse } from "@/types/types";
import { POST } from "@/utility/fetcher";
import { ChatMessage } from "@/types/calculatorTypes";

const getDateTime = () => {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const ampm = Number(hour) >= 12 ? "PM" : "AM";
  return `${hour}:${minute}${ampm}`;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([{ text: "Hello", isBot: true, time: getDateTime() }]);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const validateInput = (value: string, type: string) => {
    if (type === "name") {
      return /^[A-Za-z]+$/.test(value);
    }
    if (type === "phone") {
      return /^\d+$/.test(value) && value.length >= 10 && value.length <= 14;
    }
    if (type === "email") {
      return /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(value);
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = { text: input, isBot: false, time: getDateTime() };
    setMessages((prev) => [...prev, newMessage]);

    let botMessage = "";
    let isValid = true;

    switch (flag) {
      case 0:
        botMessage = "Please Enter Your Name";
        setFlag(1);
        break;
      case 1:
        if (validateInput(input, "name")) {
          setUserDetails((prev) => ({ ...prev, name: input }));
          botMessage = "Please Enter Valid Contact Number";
          setFlag(2);
        } else {
          botMessage = "Please enter a valid name";
          isValid = false;
        }
        break;
      case 2:
        if (validateInput(input, "phone")) {
          setUserDetails((prev) => ({ ...prev, phone: input }));
          botMessage = "Please Enter Your Email";
          setFlag(3);
        } else {
          botMessage = "Please enter a valid 10-14 digit phone number";
          isValid = false;
        }
        break;
      case 3:
        if (validateInput(input, "email")) {
          setUserDetails((prev) => ({ ...prev, email: input }));
          botMessage = "Please Brief about your project";
          setFlag(4);
        } else {
          botMessage = "Please enter a valid email";
          isValid = false;
        }
        break;
      case 4:
        const finalDetails = { ...userDetails, description: input };
        // setUserDetails((prev) => ({ ...prev, description: input }));
        setUserDetails(finalDetails);
        botMessage = "Thanks for contacting us. Our Sales team will contact you soon.";
        setFlag(5);
        try {
          const data = await POST<ChatBotResponse>(API_ENDPOINT.CHAT_BOT, finalDetails);
            botMessage = "Thanks for contacting us. Our Sales team will contact you soon.";
        } catch (error) {
          console.error("Error sending email:", error);
          botMessage = "Error sending your inquiry. Please try again.";
        }
        break;
      default:
        botMessage = "Conversation completed.";
    }

    if (isValid) {
      setMessages((prev) => [...prev, { text: botMessage, isBot: true, time: getDateTime() }]);
    } else {
      setMessages((prev) => [...prev.slice(0, -1), { text: botMessage, isBot: true, time: getDateTime() }]);
    }

    setInput("");
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      handleSubmit();
    }
  };

  return (
    <>
      <ChatButtons isOpen={isOpen} toggleChat={toggleChat} />
      {isOpen && (
        <section className={styles.chatboxPopup}>
          <div className={styles.chatboxPopupDiv}>
            <aside className={styles.imgOnlineChat}>
              <Image src={Apsd} className={styles.imageChatBot} alt="image" />
              <span></span>
            </aside>
            <aside>
              <span style={{ marginLeft: "0.7rem" }}>
                <b>Thoughtwin</b>
              </span>
              <p>How may I help you today?</p>
            </aside>
          </div>
          <div id="bodybox">
            <div id="chatborder">
              <div className={styles.bod} ref={chatBodyRef}>
                {messages.map((msg, index) => (
                  <div key={index} className={styles.outerBox}>
                    <span
                      className={`${styles.chatlog} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
                      style={{
                        backgroundColor: msg.isBot ? "#f1f1f1" : "#FF8282",
                        color: msg.isBot ? "inherit" : "#fff",
                        float: msg.isBot ? "none" : "right",
                      }}
                    >
                      {msg.isBot && <Image src={One} alt="Bot" style={{ marginRight: "5px" }} />}
                      {msg.text}
                    </span>
                    <h6
                      className={styles.digitalClock}
                      style={{
                        textAlign: msg.isBot ? "left" : "right",
                        margin: msg.isBot ? "10px 0 4px" : "10px 0 4px",
                      }}
                    >
                      {msg.time}
                    </h6>
                  </div>
                ))}
              </div>
              <footer className={styles.chatboxPopupFooter}>
                <aside style={{ flex: 10 }}>
                  <input
                    type="text"
                    name="chat"
                    id="chatbox"
                    placeholder="Reply to TWbot"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </aside>
                <aside style={{ flex: 1, color: "#888", textAlign: "center" }}>
                  <button className={styles.messageSubmit} onClick={handleSubmit}>
                    <Image src={Send} alt="Send" />
                  </button>
                </aside>
              </footer>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
