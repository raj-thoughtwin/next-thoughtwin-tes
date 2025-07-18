import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "variables.scss";`, // inject variables globally
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

export default nextConfig;
