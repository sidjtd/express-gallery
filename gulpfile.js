var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


<<<<<<< HEAD
  // browserSync.init({
  //     server: "./public",
  //       proxy: 'localhost:3000'
  // });
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("scss/*/*.scss", ['sass']);
  gulp.watch("public/*").on('change', browserSync.reload);
});

=======
>>>>>>> andrew_master
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

<<<<<<< HEAD
gulp.task('default', ['serve']);
=======
gulp.task('default', ['serve']);
>>>>>>> andrew_master
