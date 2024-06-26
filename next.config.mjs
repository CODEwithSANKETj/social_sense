/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash:true,
    exportPathMap : async function (defaultpathmap){
        return defaultpathmap
    }
};

export default nextConfig;
