const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dummyimage.com",
          pathname: "**",
        },
      ],
    },
  };

  module.exports = nextConfig
