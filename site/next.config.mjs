/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
