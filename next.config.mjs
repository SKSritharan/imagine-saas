/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "cdn.openai.com",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
