var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

gulp.task('html', function(){
    gulp.src('app/*.html')
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('less', function () {
    return gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});
 
gulp.task('css', function () {
    return gulp.src('app/css/*.css')
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: true
    });
});


gulp.task('watch', function () {
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/less/*.less', ['less']);
    gulp.watch('app/css/*.css', ['css']);
});

gulp.task('default', ['browser-sync', 'html', 'less', 'css', 'watch']);