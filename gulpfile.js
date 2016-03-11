var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('default', function() {
    return gulp.src('angular-slimScroll.js')
        .pipe(closureCompiler('angular-slimScroll.min.js'))
        .pipe(gulp.dest(''));
});