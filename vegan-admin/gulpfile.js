var gulp    = require('gulp');
var cssnano = require('gulp-cssnano');
var rename  = require('gulp-rename');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
//var watch = require('gulp-watch');

gulp.task('css', function() {
  gulp.src(['./src/stylesheets/main.css'])
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min'}))
      .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('js', function() {
  gulp.src([
        './public/bower_components/angular/angular.min.js',
        './public/bower_components/angular-route/angular-route.min.js',
        // './public/bower_components/angular-bootstrap/ui-bootstrap.min.js',
        './src/javascripts/main.js'
      ])
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min'}))
      .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('html', function() {
  gulp.src('src/html/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./public'));
});

gulp.task('default', ['css', 'js', 'html']);

// =============================================



/*



// 登陆 begin ---------------
gulp.task('signinjs', function() {
  gulp.src(['./src/javascripts/signin.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/javascripts'));
});
gulp.task('signincss', function() {
  gulp.src([
      './src/stylesheets/signin.css', 
      './src/stylesheets/style.css'
    ])
    .pipe(concat('signin.css'))
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/stylesheets'));
});
// ------------------ 登陆 end

// client 
gulp.task('client-signinjs', function () {
  gulp.src(['./src/javascripts/client-signin.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('indexcss', function() {
  gulp.src('./src/stylesheets/style.css')
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('itemjs', function() {
  gulp.src('./src/javascripts/item.js')
  .pipe(uglify())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('buildlib', function() {
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/jquery'));

  gulp.src('./bower_components/bootstrap/dist/js/*')
    .pipe(gulp.dest('./public/bootstrap/js'));
  gulp.src('./bower_components/bootstrap/dist/css/*')
    .pipe(gulp.dest('./public/bootstrap/css'));
  gulp.src('./bower_components/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('./public/bootstrap/fonts'));

  gulp.src([
      './bower_components/angular/angular.js', 
      './bower_components/angular/angular.min.js',
      './bower_components/angular/angular.min.js.map',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-route/angular-route.min.js',
      './bower_components/angular-route/angular-route.min.js.map',
      './bower_components/angular-bootstrap/ui-bootstrap.min.js',
      './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ])
    .pipe(gulp.dest('./public/angular'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/stylesheets/signin.css'], ['signincss']);
  gulp.watch(['./src/javascripts/signin.js'], ['signinjs']);
  gulp.watch(['./src/javascripts/client-signin.js'], ['client-signinjs']);

  gulp.watch(['./src/stylesheets/dashboard.css'], ['dashboardcss']);
  gulp.watch(['./src/javascripts/dashboard.js'], ['dashboardjs']);

  gulp.watch(['./src/javascripts/item.js'], ['itemjs']);
});


*/
