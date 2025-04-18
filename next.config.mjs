/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                // port: '',
                // pathname: '/random/**',
            },
        ],
    },
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
