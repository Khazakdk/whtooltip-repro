const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'  
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/whtooltip-repro" : "";

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  output: 'export',
}
 
module.exports = withNextra(nextConfig)
