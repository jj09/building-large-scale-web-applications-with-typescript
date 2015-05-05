var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    compilePath = 'compiled';

gulp.task('compile-ts', function () {
    return gulp.src(["src/*.ts"])
      .pipe(tsc({
         target: 'ES6',
         declarationFiles: false,
         noExternalResolve: true
      }))
      .pipe(gulp.dest("src"));
});

gulp.task('traceur', function () {
    return gulp.src(['src/*.js'])
        .pipe(plumber())
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function () {
    return gulp.src(['src/*.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('default', ['compile-ts','traceur', 'babel']);