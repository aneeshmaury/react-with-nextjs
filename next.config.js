/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/react-with-nextjs" : "",
  output: process.env.NODE_ENV === "production" ? "export" : "standalone", // Set a default value for development
  distDir: process.env.NODE_ENV === "production" ? "dist" : ".next", // Set a default value for development
  images: {},
};

module.exports = nextConfig;
