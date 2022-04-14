/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  
}

module.exports = nextConfig


// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
    
      test: /\.woff(2)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './font/[hash].[ext]',
            mimetype: 'application/font-woff'
          }
        }
      ]
    })

    return config
  },
}