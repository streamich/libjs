const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('build-ts', () => {
    return gulp
        .src(['src/**/*.ts', '!src/**/__tests__/**'])
        .pipe(
            ts({
                target: 'es5',
                module: 'commonjs',
                removeComments: false,
                noImplicitAny: false,
                sourceMap: false,
            })
        )
        .pipe(gulp.dest('lib'));
});

gulp.task('copy-js', () => {
    return gulp
        .src(['src/**/*.js', '!/src/**/__tests__/**'])
        .pipe(gulp.dest('lib'));
});
