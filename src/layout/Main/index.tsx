"use client"
import React, { ReactNode, Suspense } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ChatBot from "@/components/ChatBot";
import WhyThoughtwin from "@/components/WhyThoughtwin";
import Newsletter from "@/components/NewsLetter/NewsLetter";

type IProps = {
  children: ReactNode;
  whyThoughtWinText?: string;
};

const Main: React.FC<IProps> = ({ children, whyThoughtWinText }) => {
  return (
    <div>
      <Header />
      <Suspense>{children}</Suspense>
      <ChatBot />
      <WhyThoughtwin text={whyThoughtWinText} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
