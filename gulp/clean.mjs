import clean from 'gulp-clean'
import gulp from 'gulp'

const { src } = gulp

export default function clean(done) {
  src('dist/*').pipe(clean())
  done()
}