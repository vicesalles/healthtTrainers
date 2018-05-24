'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


gulp.task('server',['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./scss/*.scss", ['sass']);   
    gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('sass', function () {   
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))       
        .pipe(browserSync.stream());   
   
});


gulp.task('default', ['server']);
 


