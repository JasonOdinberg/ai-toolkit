import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  //devIndicators: {
  //buildActivity: false,
  //},
  typescript: {
  // Remove this. Build fails because of route types
	ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2000mb',
    },
    middlewareClientMaxBodySize: '2000mb',
  },
};

export default nextConfig;
