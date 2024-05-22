const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
      },

      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // domains: ["res.cloudinary.com", "media.dev.to", "media.graphassets.com"],
  },
};
