const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  images: {
    domains: ['skillicons.dev'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = withContentlayer(nextConfig)
