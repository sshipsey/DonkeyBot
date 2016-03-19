'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var typings = require('gulp-typings');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['build']);
gulp.task('build', ['clean', 'typings', 'scripts']);

gulp.task('clean', function() {
   return gulp
        .src(['typings', 'maps', 'scripts/**/*.js'])
        .pipe(clean()); 
});

gulp.task('typings', function() {
    return gulp
        .src("./typings.json")
        .pipe(typings()); 
});

gulp.task('scripts', ['typings'], function() {
    return gulp
        .src(['src/**/*.ts', '!src/typings/**/*.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsc.createProject("tsconfig.json")))
        .pipe(sourcemaps.write('/maps', { sourceRoot: '../../src' }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*.ts', ['scripts'])
});