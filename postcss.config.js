// npm install postcss-loader autoprefixer css-mqpacker cssnano -D
// autoprefixer - проставляет префиксы стилям
// css-mqpacker - сжимает медиа запросы
// cssnano - максимально минифицирует исходные стили

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  ]
}
