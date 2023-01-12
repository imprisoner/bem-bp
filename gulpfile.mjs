import gulp from 'gulp'
// tasks imports
import pug from './gulp/pug.mjs';
import scss from './gulp/scss.mjs';
import clean from './gulp/clean.mjs';
import fonts from './gulp/fonts.mjs';
import images from './gulp/images.mjs';
import svg from './gulp/svg.mjs';

const { series, parallel, watch } = gulp

const GLOBS = {
  PUG: "src/pug/pages/**.pug",
  SCSS: "src/scss/main.scss",
  FONTS: "src/assets/fonts/*.woff",
  IMAGES: "src/assets/images/**/*",
  SVG: "src/assets/svg/**/*",
  DIST: "dist/"
}


export const dev = () => watch(pug, scss)
export default series(clean, pug, scss, fonts, images, svg)