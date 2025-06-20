/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://b2b-datenbank.de/**')],
  },
};

export default nextConfig;