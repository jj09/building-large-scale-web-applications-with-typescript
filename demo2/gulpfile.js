var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint');

gulp.task('ts-lint', function () {
    return gulp.src(['app/src/*.ts'])
      .pipe(tslint({
        configuration: '.tslintrc'
      }))
      .pipe(tslint.report('prose'));
});

gulp.task('compile-ts', function () {
    return gulp.src(['app/src/*.ts', 'app/typings/**/*.d.ts'])
      .pipe(tsc())
      .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', function() {
    gulp.watch(['app/src/*.ts'], ['ts-lint', 'compile-ts']);
});

gulp.task('default', ['ts-lint', 'compile-ts', 'watch']);