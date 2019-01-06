'use strict'

// Load plugins
const autoprefixer = require('autoprefixer')
const browsersync = require('browser-sync').create()
const cssnano = require('cssnano')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const minify = require('gulp-minify')
const babel = require('gulp-babel')

// Optimize Images
function images () {
  return gulp
    .src('src/resources/assets/img/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest('src/public/assets/img'))
}

// CSS task
function css () {
  return gulp
    .src('src/resources/assets/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('src/public/assets/css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('src/public/assets/css'))
    .pipe(browsersync.stream())
}

// Transpile, concatenate and minify scripts
function scripts () {
  return gulp
    .src(['src/resources/assets/js/*.js'])
    .pipe(plumber())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(minify())
    .pipe(gulp.dest('src/public/assets/js'))
    .pipe(browsersync.stream())
}

// Watch files
function watchFiles () {
  gulp.watch('src/resources/assets/scss/*.scss', css)
  gulp.watch('src/resources/assets/js/*.js', scripts)
  gulp.watch('src/resources/assets/img/*', images)
}

// Tasks
gulp.task('images', images)
gulp.task('css', css)
gulp.task('js', scripts)
gulp.task('default', gulp.parallel(watchFiles))
