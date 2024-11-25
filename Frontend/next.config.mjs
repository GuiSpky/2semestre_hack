/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['127.0.0.1'],  // Adiciona o domínio do seu servidor local
    },
};

export default nextConfig;

