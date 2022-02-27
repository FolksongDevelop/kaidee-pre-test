/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  // basePath: '/kaidee-pre-test',
  assetPrefix: isProd ? '/kaidee-pre-test/' : '',
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: ""
  }
}

module.exports = nextConfig
