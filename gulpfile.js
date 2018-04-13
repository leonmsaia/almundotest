// Load Enviroment
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
// Load Enviroment End

// Task List
gulp.task('css', function (){
    gulp.src('assets/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./build/dev/css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./build/prod/css'));
});

gulp.task('js', function(){
  return gulp.src('assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['css', 'js' ]);
// Task List End
