
//const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const browser = require('browser-sync');
var less = require('gulp-less');

var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] });

gulp.task('server',function(done) {
    browser.init({
        server: './src'
    });
    done();
});

gulp.task('less', (done) => {
    return gulp.src('./src/less/main.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', (done) => {
    gulp.watch('./src/*.html').on('change', browser.reload);
    gulp.watch('./src/js/*.js').on('change', browser.reload);
    gulp.watch('./src/less/main.less',['less']).on('change', browser.reload);
});

gulp.task('build', ['server', 'less', 'watch']);
