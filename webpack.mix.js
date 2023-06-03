let mix = require('laravel-mix');

/**
 * Laravel Mix config
 */


let sourcePath = 'src';
let publicPath = 'dist';

mix
	.sass(sourcePath + '/sass/app.scss', 'css')
	.js(sourcePath + '/js/app.js', 'js').vue()
	.setPublicPath(publicPath)
	.version();
