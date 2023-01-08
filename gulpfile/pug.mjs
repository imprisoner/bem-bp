import gulp from 'gulp'
import pugCompiler from 'gulp-pug'

const {src, dest} = gulp

const PUG_PATH = "src/pug/pages"

export default function pug(done) {
    console.log(process.cwd())
    src(PUG_PATH + '/*.pug')
    .pipe(pugCompiler({
        verbose: true
    }))
    .pipe(dest('dist', {cwd: "."}))
    done()
}