import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../webpack.config.js'
import { GLOBS } from "../config.js"
import uglify from "gulp-uglify";
import rename from "gulp-rename";
const { src, dest } = gulp

export function scriptsPages(done) {
  // TODO src makes no sense
  src(GLOBS.SCRIPTS_PAGES.SRC)
    .pipe(
      webpack({
        config: webpackConfig,
      })
    )
    .pipe(dest(GLOBS.SCRIPTS_PAGES.DEST))
    .pipe(uglify())
    .on("error", function (err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(GLOBS.SCRIPTS_PAGES.DEST));

  done();
}

export function scriptsVendor(done) {
  src(GLOBS.SCRIPTS_VENDOR.SRC)
  .pipe(dest(GLOBS.SCRIPTS_VENDOR.DEST))

  done()
}