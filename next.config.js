/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir: true,
  },
  images:{
    domains: [
          'seeklogo.com',
          "cdn.sanity.io",
        ],
  }
}
