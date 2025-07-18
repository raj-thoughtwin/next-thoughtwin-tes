"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, trackExit } from "@/lib/ga";

export default function AnalyticsProvider({ children }: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    // Track pageview on route change
    pageview(`${pathname}?${searchParams.toString()}`);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleExit = () => {
      const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackExit(duration);
    };

    // Call on tab close/navigation
    window.addEventListener("beforeunload", handleExit);

    // Call when tab becomes hidden (e.g. user switches tabs)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        handleExit();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleExit);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
}
