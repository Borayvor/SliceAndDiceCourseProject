var isProduction = require('yargs').argv.env === 'production',
    gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	inject = require('gulp-inject'),
	minifyHTML = require('gulp-minify-html'),
	del = require('del'),
    addStream = require('add-stream'),
	angularFilesort = require('gulp-angular-filesort'),
	angularTemplateCache = require('gulp-angular-templatecache');

// File paths
var config = {
    vendorJsSrc: [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-route/angular-route.min.js',
		'bower_components/angular-cookies/angular-cookies.min.js',
		'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
    ],
    vendorCssSrc: [

    ],
    appJsSrc: ['app/**/*.js', '!app/build/*'],
    appCssSrc: 'app/css/site.min.css',
    appTemplatesHtml: 'app/**/*.html',
    appIndexHtml: 'index-template.html'
}

// Lint Task
gulp.task('lint', function () {
    return gulp.src(config.appJsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// For angular templates
var prepareTemplates = function () {
    return gulp.src(config.appTemplatesHtml)
        .pipe(angularTemplateCache());
};

// Combine and minify all library JS files
gulp.task('vendors', function () {
    del.sync(['app/build/vendorjs*']);

    return gulp.src(config.vendorJsSrc)
		.pipe(gulpIf(isProduction, uglify()))
		.pipe(concat('vendorjs' + (isProduction ? getStamp() : '') + '.min.js', { newLine: '' }))
		.pipe(gulp.dest('app/build'));
});

// Combine and minify all JS files from the app folder
gulp.task('scripts', function () {
    del.sync(['app/build/alljs*']);

    return gulp.src(config.appJsSrc)
		.pipe(angularFilesort())
		.pipe(gulpIf(isProduction, uglify()))
        .pipe(addStream.obj(prepareTemplates()))
		.pipe(concat('alljs' + (isProduction ? getStamp() : '') + '.min.js', { newLine: '' }))
		.pipe(gulp.dest('app/build'));
});

// Minify, prefix and contat CSS
gulp.task('css', function () {
    del.sync(['app/build/allcss*']);

    var allCss = config.vendorCssSrc.concat(config.appCssSrc);

    return gulp.src(allCss)
		.pipe(gulpIf(isProduction, minifyCSS()))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('allcss' + (isProduction ? getStamp() : '') + '.min.css', { newLine: '' }))
		.pipe(gulp.dest('app/build'))
});

// Inject minified files into new HTML
gulp.task('html', ['css', 'scripts'], function () {
    del.sync(['index.html']);
    var target = gulp.src(config.appIndexHtml);
    //var vendorSources = gulp.src(['app/build/vendorjs*'], { read: false });
    //var appSources = gulp.src(['app/build/alljs*', 'app/build/allcss*'], { read: false });

    var cssSources = gulp.src(config.appCssSrc, { read: false });
    var vendorSources = gulp.src(config.vendorJsSrc, { read: false });
    var appSources = gulp.src(config.appJsSrc, { read: false });

    

    return target
        .pipe(inject(cssSources, { relative: true }))
        .pipe(inject(vendorSources, { starttag: '<!-- inject:vendors:{{ext}} -->', relative: true }))
        .pipe(inject(appSources, { relative: true }))
        //.pipe(minifyHTML({ conditionals: true }))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'));
});


// Watch for changes
gulp.task('watch', ['lint', 'css', 'vendors', 'scripts', 'html'], function () {
    gulp.watch(config.appCssSrc, ['css', 'html']);
    gulp.watch(config.appJsSrc, ['lint', 'scripts', 'html']);
    gulp.watch(config.appTemplatesHtml, ['lint', 'scripts', 'html']);
    gulp.watch(config.appIndexHtml, ['html']);
});

// Set  default tasks
gulp.task('default', ['lint', 'css', 'vendors', 'scripts', 'html'], function () { });