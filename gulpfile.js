const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');

// import gulp from 'gulp';
// import jshint from 'gulp-jshint';
// import jscs from 'gulp-jscs';

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

const dirs = {
    src: 'src',
    dest: 'build'
};

// gulp.task('styles', () => {
//     return gulp.src(paths.src)
//         .pipe(sourcemaps.init())
//         .pipe(sass.sync().on('error', plugins.sass.logError))
//         .pipe(autoprefixer())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(paths.dest));
// });

gulp.task('compile:js', () => {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(gulp.dest("./build/js"));
});

// build.task('build', ['compile:js']);
