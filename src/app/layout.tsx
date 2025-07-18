import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import { THOUGHTWIN_ORGANIZATION_SCHEMA } from "@/constants/Schema/Schema";
import "../styles/style.scss";
import "../styles/globals.scss";
import AnalyticsProvider from "@/layout/AnalyticsProvider/AnalyticsProvider";
import { GoogleAnalytics } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thoughtwin",
  description: "Thoughtwin",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "mHU8tOudJAeNu7dT4wkCVCwdXtNGy1VnCapxyKBHHpk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}", {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Organization Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(THOUGHTWIN_ORGANIZATION_SCHEMA) }} />
        {/* Add Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <GoogleAnalytics/>
        <Suspense fallback={null}>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </Suspense>
        <ToastContainer />
      </body>
    </html>
  );
}
