const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const minifyJs = require('gulp-uglify');

function style() {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(autoprefixer())
    .pipe(imagemin())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
}

function compress() {
  return gulp
  .src('./src/js/*.js')
  .pipe(minifyJs())
  .pipe(gulp.dest('./dist/js'))
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html',
    },
  })
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/*.js', compress).on('change', browserSync.reload);;
}

exports.style = style
exports.watch = watch
exports.compress = compress

