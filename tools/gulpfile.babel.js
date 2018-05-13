//load plugins ======== create wanghao ;
import gulp from 'gulp'
import sass from 'gulp-sass'
import util from 'gulp-util'
import notify from 'gulp-notify'
import autoPrefixer from 'gulp-autoprefixer'
import optimist from 'optimist'
import plumber from 'gulp-plumber'
import path from 'path'

const argv = optimist.argv;
const fileSrc = 'aodi';

let
  basePath = path.resolve(__dirname, '../');

gulp.task('sass', cd => (
  gulp.src(path.join(basePath, 'src', fileSrc, 'scss', 'index.scss'))
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(autoPrefixer({browsers: ['last 20 versions']}))
    .pipe(gulp.dest(path.join(basePath, 'src', fileSrc, 'css')))
    .pipe(notify("Found file: <%= file.relative %>!"))
    .on("error", notify.onError(function (error) {
      return "Message to the notifier: " + error.message;
    }))
));

gulp.task('start', function(){
  gulp.watch(path.join(basePath, 'src', fileSrc, 'scss', 'index.scss'), ['sass'])
});

gulp.task('default', argv.watch && ['start']);