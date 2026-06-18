const fs = require('node:fs')

const localePath = 'src/renderer/src/i18n/locales/zh.json'
const spamPrefix = '亚搏体育app'
const content = fs.readFileSync(localePath, 'utf8')
const updated = content.replaceAll(spamPrefix, '')

if (content === updated) {
  console.log('No spam prefix found.')
} else {
  fs.writeFileSync(localePath, updated)
  console.log('Removed spam prefix from zh locale.')
}
