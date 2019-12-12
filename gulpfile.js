var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var browser = require('browser-sync').create();
var babel = require('gulp-babel')


gulp.task('sass',function(done){
	gulp.src('./src/css/*.scss')
	
	.pipe(load.sass())
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/css/'))
	done()
})
gulp.task('css',function(done){
	gulp.src('./src/css/*.css')
	.pipe(load.minifyCss())
	
	.pipe(gulp.dest('./dist/css/'))
	done()
})
gulp.task('js',function(done){
	gulp.src('./src/js/*.js')
	.pipe(babel({
        'presets':['@babel/env']
    }))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js/'))
    done()
})


gulp.task('html',function(done){
	gulp.src('./src/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest("./dist/"))
	done()
})


gulp.task('server',gulp.series(gulp.parallel('html','sass', 'css' ,'js'),function(done){

	browser.init({
		server:'./dist/',
		port:80
	})

	gulp.watch('./src/',gulp.series(gulp.parallel('html','sass','css','js'),function(done){
		browser.reload()
		done()
	}))
	
	done()
}))
