/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.pinimg.com",
          port: "",
          pathname:
            "/originals/**",
        },
      ],
    },
  };
