/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apexlegendsstatus.com', 'legion.apexlegendsstatus.com'],
  },
  ...nextTranslate()
}

module.exports = nextConfig