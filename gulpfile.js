var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');
	
var coffeeSrc = ['components/coffee/*.coffee'];
var jsSrc = [	'components/scripts/rclick.js',
				'components/scripts/tagline.js'
];

gulp.task('coffee', function(){
	gulp.src(coffeeSrc)
	.pipe(coffee({ bare:true })
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
	gulp.src(jsSrc)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('builds/development/js'))
});