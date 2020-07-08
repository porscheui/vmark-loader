const vmark = require('@porsche-design-system/vmark')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {}
  return vmark(source, options)
}
