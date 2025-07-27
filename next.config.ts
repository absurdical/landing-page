import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const withPWATyped = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
}) as (config: NextConfig) => NextConfig;

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWATyped(nextConfig);
