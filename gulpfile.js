import gulp from 'gulp'
// tasks imports
import {
  pug,
  scss,
  fonts,
  images,
  svg,
  clean,
  serve,
  reload,
  watch
} from './gulp/tasks/index.js'

const { series } = gulp

const build = series(clean, pug, scss, fonts, images, svg);

export const dev = series(
  clean,
  build,
  serve,
  watch
)

export default build
export const cleanDist = clean

// function watch(done) {
//   gulp.watch(GLOBS.PUG.SRC, { ignoreInitial: false }, series(pug, reload))
//   gulp.watch(GLOBS.SCSS.SRC, { ignoreInitial: false }, series(scss, reload))
//   gulp.watch(GLOBS.FONTS.SRC, { ignoreInitial: false }, series(fonts, reload))
//   gulp.watch(GLOBS.IMAGES.SRC, { ignoreInitial: false }, series(images, reload))
//   gulp.watch(GLOBS.SVG.SRC, { ignoreInitial: false }, series(svg, reload))
// }