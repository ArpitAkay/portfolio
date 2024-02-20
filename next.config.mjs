/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
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
