"use client";
import { useScrollToTop } from "@/hook/useScrollToTop";
import Banner from "@/components/Banner";
import Client from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import AlertModal from "@/components/HomeAlertModal";

const HomePage = () => {
  useScrollToTop();

  return (
    <div>
      <Banner />
      <Solutions />
      <Technology />
      <Client />
      <AlertModal />
    </div>
  );
};

export default HomePage;
