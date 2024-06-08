/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    geminiAPiKey: process.env.GEMINI_API_KEY,
  },
};

export default nextConfig;
