import gulp from 'gulp'
import imagemin, { mozjpeg, optipng, gifsicle } from 'gulp-imagemin'

const { src, dest } = gulp

export default function images(done) {
  src('src/assets/images/**/*')
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 5 })
    ]))
    .pipe(dest('dist/assets/images'))

  done()
}