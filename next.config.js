/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: {
    return: [{ source: '/about', destination: '/', permanent: true }]
  }
};
