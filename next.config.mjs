/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./", // necessário para que os recursos sejam carregados corretamente
  images: {
    unoptimized: true, // necessário para desabilitar a otimização de imagens no Next.js
  },
  basePath: "/diogocerutti.github.io", // substitua "NOME_DO_REPOSITÓRIO" pelo nome do seu repositório no GitHub
};

export default nextConfig;
