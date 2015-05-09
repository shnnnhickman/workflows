var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	compass = require('gulp-compass'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');
	
var coffeeSrc = ['components/coffee/*.coffee'];
var jsSrc = [	
				'components/scripts/rclick.js',
				'components/scripts/template.js',
				'components/scripts/tagline.js'
];
/*quick test*/
var sassSrc = ['components/sass/style2.scss']

gulp.task('coffee', function(){
	gulp.src(coffeeSrc)
	.pipe(coffee({ bare:true })
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
	gulp.src(jsSrc)
		.pipe(concat('scripts.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function(){
	gulp.src(sassSrc)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		})
		.on('error', gutil.log))
		.pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function(){
	gulp.watch(coffeeSrc, ['coffee'])
});

gulp.task('default', ['coffee', 'js','compass']);