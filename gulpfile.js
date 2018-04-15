// Load Enviroment
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
// Load Enviroment End

// Task List
gulp.task('css', function (){
    gulp.src('assets/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./src/assets/dev/css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./src/assets/prod/css'));
});

gulp.task('bootjs', function(){
  return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(uglify())
    .pipe(sourcemaps.init())
    .pipe(concat('bootstrap.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/assets/prod/js/plugins'))
});

gulp.task('jqjs', function(){
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(uglify())
    .pipe(sourcemaps.init())
    .pipe(concat('engine.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/assets/prod/js/plugins'))
});

gulp.task('js', function(){
  return gulp.src('./assets/js/theme/*.js')
    .pipe(uglify())
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/assets/prod/js'))
});


gulp.task('watch', function () {
  gulp.watch('assets/scss/*.scss', ['css']);
});

gulp.task('default', ['css', 'js' ]);
// Task List End
