/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "rrgulcdegwztusptzodr.supabase.co",
          port: "",
          pathname:
            "/**",
        },
      ],
    },
  };
