import gulp from 'gulp'

// tasks imports
import pug from './gulpfile/pug.mjs';
import scss from './gulpfile/scss.mjs';

const { series, parallel, watch } = gulp

export const dev = () => watch(pug, scss)
export default series(pug, scss)