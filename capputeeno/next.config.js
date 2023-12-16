/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                port: "",
                protocol: "https",
                hostname: "storage.googleapis.com",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
