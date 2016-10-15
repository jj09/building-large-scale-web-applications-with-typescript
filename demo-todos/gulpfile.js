var gulp = require('gulp'),
    tsc = require('gulp-typescript');

gulp.task('compile-ts', function () {
    return gulp.src(['src/*.ts', 'typings/**/*.d.ts'])
      .pipe(tsc())
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(['src/*.ts'], ['compile-ts']);
});

gulp.task('default', ['compile-ts', 'watch']);