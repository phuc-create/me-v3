import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://media2.giphy.com/media/**'),
      new URL('https://media3.giphy.com/media/**')
    ]
  }
}

export default nextConfig
