/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    PRIVATE_EMAILJS_KEY: process.env.PRIVATE_EMAILJS_KEY,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
  },
};

module.exports = nextConfig;
