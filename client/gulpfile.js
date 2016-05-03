var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () => {
	gulp.src(['./src/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('.'));
	gulp.src(['./src/htmls/*.html']).pipe(gulp.dest('./public/'));

	gulp.src(['./src/react/*.react.js']).pipe(babel({ presets: ['es2015', 'react'] })).pipe(gulp.dest('./tmp/'));
	gulp.src(['../common/src/react/client-box.js']).pipe(babel({ presets: ['react', 'es2015'] })).pipe(gulp.dest('./tmp/'));
	gulp.src(['../common/src/react/client-box.js']).pipe(babel({ presets: ['react', 'es2015'] })).pipe(gulp.dest('./public/react/'));

	gulp.src(['./node_modules/react/dist/react.min.js']).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./node_modules/react-dom/dist/react-dom.min.js']).pipe(gulp.dest('./public/javascripts/'));
});
