/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.aktin.cz",
      "hips.hearstapps.com",
      "upload.wikimedia.org",
      "img.taste.com.au",
      "www.daringgourmet.com",
    ],
  },
};

module.exports = nextConfig;
