/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "upcdn.io",
      "replicate.delivery",
      "lh3.googleusercontent.com",
      "unsplash.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "plus.unsplash.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/estehsan/backyard",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://backyard-estehsan.vercel.app/",
        permanent: false,
      },
    ];
  },
};
