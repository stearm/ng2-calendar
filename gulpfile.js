'use strict'

let gulp = require('gulp');
let gulpts = require('gulp-typescript');
let tsproject = gulpts.createProject('./src/tsconfig.json');
let sourcemaps = require('gulp-sourcemaps');
let del = require('del');

gulp.task('copy.resources', function(){
	gulp.src('./src/**/*.{html,css,js}').pipe(gulp.dest('./wwwroot'));
});

gulp.task('copy.node_modules', function(){
	gulp.src('./node_modules/moment/moment.js').pipe(gulp.dest('./wwwroot/assets/js'));
	gulp.src('./node_modules/es6-shim/es6-shim.js').pipe(gulp.dest('./wwwroot/assets/js'));
	gulp.src('./node_modules/rxjs/bundles/Rx.js').pipe(gulp.dest('./wwwroot/assets/js'));
	gulp.src('./node_modules/angular2/bundles/{angular2-polyfills.js,angular2.js,http.js}').pipe(gulp.dest('./wwwroot/assets/js'));
});

gulp.task('compile', function(){
	let result = tsproject.src()
		.pipe(sourcemaps.init())
		.pipe(gulpts(tsproject));
	return result.js.pipe(sourcemaps.write()).pipe(gulp.dest('./wwwroot'))
});

gulp.task('default', ['compile','copy.resources', 'copy.node_modules'], function(){});

gulp.task('watch', function(){
	gulp.watch('./src/**/*.{html,css,js}', ['copy.resources']);
	gulp.watch('./node_modules/*', ['copy.node_modules']);
	gulp.watch('./src/**/*.ts', ['compile']);
});

gulp.task('clean', function(){
	return del(['./wwwroot']);
})