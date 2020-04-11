const path = require('path')
const withReactSvg = require('next-react-svg')

let config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/acnh_passport' : '',
}

config = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/images'),
  webpack(config, _options) {
    return config
  }
})

module.exports = config