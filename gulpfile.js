const gulp = require('gulp');

gulp.task('copy-js', () => {
    return gulp
        .src(['src/**/*.js', '!/src/**/__tests__/**'])
        .pipe(gulp.dest('lib'));
});
