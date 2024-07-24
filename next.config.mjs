/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false, tat render 2 lan
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "thuviendientu.vinhphuc.gov.vn",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
