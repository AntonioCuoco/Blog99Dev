/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,  
    },
    eslint: {
        ignoreDuringBuilds: true, //da riattivare il linting quando avrò risolto il problema della build
    },
    swcMinify: true,
};

module.exports = withContentlayer({ ...nextConfig });
