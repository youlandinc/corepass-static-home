/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    PREFIX_URL: process.env.PREFIX_URL,
  },
}

module.exports = nextConfig
