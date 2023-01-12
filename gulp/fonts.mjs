export default function fonts(done) {
  src('src/assets/fonts/**/*').pipe(dest('dist/assets/fonts'))

  done()
}