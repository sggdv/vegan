var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src(['./src/*.html']).pipe(gulp.dest('./public/'));
  gulp.src(['./src/stylesheets/*.css']).pipe(gulp.dest('./public/stylesheets/'));
  gulp.src(['./node_modules/react/dist/react.min.js']).pipe(gulp.dest('./public/javascripts/'));
  gulp.src(['./node_modules/react-dom/dist/react-dom.min.js']).pipe(gulp.dest('./public/javascripts/'));
 
  gulp.src(['./src/javascripts/*.react.js']).pipe(babel({ presets: ['react'] })).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./src/javascripts/template/*.react.js']).pipe(babel({ presets: ['react', 'es2015'] })).pipe(gulp.dest('./public/javascripts/template/'));
	gulp.src(['./src/router/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('./router/'));
	gulp.src(['./src/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('.'));
});
