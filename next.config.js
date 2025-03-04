/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
      bodyParser: {
        sizeLimit: "50mb", // Adjust as needed
      },
    },
  };
  
  module.exports = nextConfig;
  