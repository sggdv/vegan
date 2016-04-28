var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () => {
	gulp.src(['./src/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('.'));
	gulp.src(['./src/router/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('./router'));
});
