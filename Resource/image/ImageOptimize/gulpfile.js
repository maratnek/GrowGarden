// Image


var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    // gzip = require('gulp-gzip'),
    del = require('del'),
    imageResize = require('gulp-image-resize'),
    watermark = require('gulp-watermark'),
    rename = require('gulp-rename'),
    gulp = require('gulp');

var src = '../TomatGalleryFirst/**';
var src_all = '../';
var src_svg = '../svg_optim';
var dst = '';
var pub = '../TomatGallery/';

gulp.task('image', ['imagesmall'], function () {
// gulp.task('image', function () {
    return gulp.src(src)
        // .pipe(imageResize({
        //     width : 1920,
        //     height: 1080,
        //     crop  : true,
        //     upscale: true
        // }))
        // .pipe(watermark({
        //     image: "assets/watermark/watermark.png"
        // }))
        .pipe(rename(function (path){
            path.basename = path.basename.replace('','')
        }))
        // .pipe(rename(function (path){
        //     path.basename = path.basename.replace('','')
        // }))
        .pipe(cache(imagemin()))
        .pipe(gulp.dest(pub));
})

gulp.task('imagesmall', function () {
    return gulp.src(src)
        .pipe(imageResize({
            height: 700,
            width : 600,
            crop  : true,
            upscale: true
        }))
        // .pipe(watermark({
        //     image: "assets/watermark/watermark.png"
        // }))
        .pipe(rename(function (path){
            path.basename = path.basename.replace('','')
        }))
        // .pipe(rename(function (path){
        //     path.basename = path.basename.replace('','back')
        // }))
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true
            // optimizationLevel: 5
        })))
        .pipe(gulp.dest(pub + ''));
})

gulp.task('imagesvg', function () {
    return gulp.src(src_all + '**/*.svg')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
            ]))
        .pipe(gulp.dest(src_svg + ''));
})

gulp.task('clearcache', function() { return cache.crearAll();});
gulp.task('cleaready', function() {return del.sync(pub);});

