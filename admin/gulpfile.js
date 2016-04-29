var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('default', () => {
  gulp.src(['./src/*.html']).pipe(gulp.dest('./public/'));
  gulp.src(['./src/stylesheets/*.css']).pipe(gulp.dest('./public/stylesheets/'));

  gulp.src(['./node_modules/react/dist/react.min.js']).pipe(gulp.dest('./public/javascripts/'));
  gulp.src(['./node_modules/react-dom/dist/react-dom.min.js']).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./node_modules/jquery/dist/jquery.min.js']).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./node_modules/bootstrap/dist/bootstrap.min.js']).pipe(gulp.dest('./public/javascripts/'));
 
 	gulp.src(['./src/router/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('./router/'));
 	gulp.src(['./src/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('.'));

  gulp.src(['./src/javascripts/*.all.js'])
		.pipe(babel({ presets: ['react', 'es2015'] }))
		.pipe(rename({ suffix: '.tmp' }))
		.pipe(gulp.dest('./public/javascripts/'));

	gulp.src(['./src/react/*.js'])
		.pipe(babel({ presets: ['react', 'es2015'] }))
		.pipe(gulp.dest('./public/react/'));

	gulp.src(['../common/src/react/client-box.js'])
		.pipe(babel({ presets: ['react', 'es2015'] }))
		.pipe(gulp.dest('./public/react/'));

});
