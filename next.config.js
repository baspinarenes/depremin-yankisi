/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["t1.gstatic.com"],
  },
};

module.exports = nextConfig;
