/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.google.com',
                port: '',
                pathname: '/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png',
                search: '',
                // pathname: '/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png'
            }
        ]
    }
};

export default nextConfig;
