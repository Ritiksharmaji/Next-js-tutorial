/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/user',
                destination: '/user/student',
                permanent: false, // Set to true for a 308 permanent redirect
            },
            {
                source:'/admin',
                destination:'/user/teacher',
                permanent: false, // Set to true for a 308 permanent redirect
            }
        ];
    }
};

export default nextConfig;
