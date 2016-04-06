var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src(['./src/*.html']).pipe(gulp.dest('./public/'));
  gulp.src(['./src/stylesheets/*.css']).pipe(gulp.dest('./public/stylesheets/'));
  gulp.src(['./node_modules/react/dist/react.min.js']).pipe(gulp.dest('./public/javascripts/'));
  gulp.src(['./node_modules/react-dom/dist/react-dom.min.js']).pipe(gulp.dest('./public/javascripts/'));
 
  gulp.src('./src/javascripts/signin.react.js')
    .pipe(babel({ presets: ['react'] }))
    .pipe(gulp.dest('./public/javascripts/'));
});


