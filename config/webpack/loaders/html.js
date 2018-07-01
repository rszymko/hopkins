module.exports = {
  test: /\.html$/,
  use: [{
    loader: 'html-loader',
    options: {
      attrs: [':data-src'],
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
      customAttrAssign: [ /\)?\]?=/ ]
    }
  }]
}
