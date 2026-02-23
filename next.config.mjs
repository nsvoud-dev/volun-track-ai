import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Use CJS build of web3.js in client bundle to avoid @noble/curves ESM resolution
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@solana/web3.js": path.resolve(
          __dirname,
          "node_modules/@solana/web3.js/lib/index.browser.cjs.js"
        ),
      };
    }
    return config;
  },
};

export default nextConfig;
