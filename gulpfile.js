"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compileSass);

function compileSass() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
}

function watch() {
  gulp.watch("src/sass/**/*.scss", compileSass);
}