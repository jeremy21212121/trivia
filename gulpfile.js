var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["./*.html", "./js/*.js", "./css/*.css"],
        server: {
            baseDir: "./"
        }
    });
});
