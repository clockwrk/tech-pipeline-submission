let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon');
    // watch = require('gulp-watch'),
    // refresh = require('gulp-refresh');



gulp.task('buildJS', function() {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', console.error.bind(console))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});


gulp.task('watch', function () {
  gulp.watch(['./browser/js/app.js', './browser/js/**/*.js'], ['buildJS']);
});

gulp.task('demon', function () {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// gulp.task('watch',['buildJS'],()=>{
//     console.log
//     refresh.listen()
//     gulp.watch('./**/*',['buildJS']);

// });
