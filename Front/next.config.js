/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              pathname: '**',
          },
      ],
      loader: 'default',
  },
  reactStrictMode: false
}

module.exports = nextConfig
