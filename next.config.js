/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["default", "bg", "en"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
