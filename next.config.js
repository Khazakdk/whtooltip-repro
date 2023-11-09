const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'  
})

const assetPrefix = "";

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
