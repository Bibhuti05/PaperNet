/** @type {import('next').NextConfig} */
const nextConfig = {
    fontOptimization: {
        // Will generate fallback definition for all Google fonts with display=swap
        experimentalAdjustFallbacks: false
     },
}

module.exports = nextConfig
