/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['drive.google.com'],

  },
  reactStrictMode: true,
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login.js'
      }
    ]
  }
}

module.exports = nextConfig
