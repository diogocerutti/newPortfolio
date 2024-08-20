/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/diogocerutti.github.io/" : "",
  images: {
    unoptimized: true, // necessário para desabilitar a otimização de imagens no Next.js
  },
  basePath: isProd ? "/diogocerutti.github.io" : "",
};

export default nextConfig;
