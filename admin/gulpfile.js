var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('default', [
	'app',
	'page', 
	'node_modules',
	'css',
	'html',
	'alljs',
	'client',
	'common',
	'instance-list-page',
	'template-add-page',
	'template-list-page'
]);

gulp.task('app', () => {
 	gulp.src(['./src/router/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('./router/'));
 	gulp.src(['./src/*.js']).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('.'));
});

gulp.task('page', () => {
	gulp.src(['./src/react/*.js'])
		.pipe(babel({ 
			presets: ['react', 'es2015'], 
			plugins: ['babel-plugin-transform-decorators-legacy'],
		}))
		.pipe(gulp.dest('./public/react/'));
});

gulp.task('node_modules', () => {
  gulp.src(['./node_modules/react/dist/react.min.js']).pipe(gulp.dest('./public/javascripts/'));
  gulp.src(['./node_modules/react-dom/dist/react-dom.min.js']).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./node_modules/jquery/dist/jquery.min.js']).pipe(gulp.dest('./public/javascripts/'));
	gulp.src(['./node_modules/bootstrap/dist/bootstrap.min.js']).pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('css', () => {
  gulp.src(['./src/stylesheets/*.css']).pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('html', () => {
  gulp.src(['./src/*.html'])
		.pipe(gulp.dest('./public/'));
});

gulp.task('alljs', () => {
  gulp.src(['./src/javascripts/*.all.js'])
		.pipe(babel({ presets: ['react', 'es2015'] }))
		.pipe(rename({ suffix: '.tmp' }))
		.pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('client', () => {
	gulp.src('../common/src/react/client-box.js')
		.pipe(babel({ presets: ['react', 'es2015'] }))
		.pipe(gulp.dest('./public/react/'));
});

gulp.task('common', () => {
	gulp.src('./src/react/common/*.js')
		.pipe(babel({ 
			presets: ['react', 'es2015'],
			plugins: ['babel-plugin-transform-decorators-legacy'],
		}))
		.pipe(gulp.dest('./public/react/common/'));
});

gulp.task('instance-list-page', () => {
	gulp.src('./src/react/instance-list-page/*.js')
		.pipe(babel({
			presets: ['react', 'es2015'],
			plugins: ['babel-plugin-transform-decorators-legacy'],
		}))
		.pipe(gulp.dest('./public/react/instance-list-page/'));
});

gulp.task('template-add-page', () => {
	gulp.src('./src/react/template-add-page/*.js')
		.pipe(babel({
			presets: ['react', 'es2015'],
			plugins: ['babel-plugin-transform-decorators-legacy'],
		}))
		.pipe(gulp.dest('./public/react/template-add-page/'));
});

gulp.task('template-list-page', () => {
	gulp.src('./src/react/template-list-page/*.js')
		.pipe(babel({
			presets: ['react', 'es2015'],
			plugins: ['babel-plugin-transform-decorators-legacy'],
		}))
		.pipe(gulp.dest('./public/react/template-list-page/'));
});
