var gulp = require('gulp');
var gulpBabel = require('gulp-babel');


gulp.task("babel:plugins", function () {
    return gulp.src('plugins/*.js')
        .pipe(gulpBabel({
            presets: ['env']
        }))
        .pipe(gulp.dest('plugins/dist'));
});