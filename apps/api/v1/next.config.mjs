import { nextJsConfig } from '@edgarguzman/next';

/** @type {import("next").NextConfig} */
const nextConfig = {
    ...nextJsConfig,

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3002/api/:path*',
            },
            {
                source: '/static/:path*',
                destination: '/not-found',
            },
        ];
    },
};

export default nextConfig;
