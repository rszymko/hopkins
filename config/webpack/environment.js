const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const html = require('./loaders/html')
const assets = require('./loaders/assets')

environment.loaders.append('typescript', typescript)
environment.loaders.append('html', html)
environment.loaders.append('assets', assets)
environment.loaders.append('sass', assets)
module.exports = environment
