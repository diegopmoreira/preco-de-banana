const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  return gulp
    .src("lib/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("autoprefixer", function() {
  return gulp
    .src("dist/assets/css/style.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("dist/assets/css"));
});
gulp.task("babel", function() {
  return gulp
    .src("lib/js/*.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(minify())
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(browserSync.stream());
});
gulp.task("imagemin", () => {
  gulp
    .src("lib/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/img"));
});
gulp.task("serve", ["babel", "pug", "sass", "imagemin"], function() {
  browserSync.init({
    server: "./dist/"
  });
  gulp.watch("lib/scss/*.scss", ["sass"]);
  gulp.watch("lib/js/*.js", ["babel"]);
});

gulp.task("default", ["serve"]);
