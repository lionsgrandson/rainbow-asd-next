/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: false,
  },
  env: {
    PUBLIC_EMAILJS_KEY: process.env.PUBLIC_EMAILJS_KEY,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
  },
}
module.exports = nextConfig
