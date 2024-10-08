import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'], // Añade el dominio permitido para las imágenes
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: require.resolve("path-browserify"),
      };
    }
    return config;
  },
};

export default nextConfig;
