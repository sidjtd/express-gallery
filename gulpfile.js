var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  browserSync.init({
    server: "./public",
      proxy: 'localhost:3000/'
    });
  return gulp.src("scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
