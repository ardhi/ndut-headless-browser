const puppeteer = require('puppeteer')

const plugin = async function (scope, options) {
  scope.ndutHeadlessBrowser.puppeteer = puppeteer
}

module.exports = async function () {
  const { fp } = this.ndut.helper
  return fp(plugin)
}
