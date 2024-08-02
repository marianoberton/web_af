import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  output: 'export',
  trailingSlash: true,
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
