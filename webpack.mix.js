let mix = require('laravel-mix');

/**
 * Laravel Mix config
 */


let sourcePath = 'src';
let publicPath = 'dist';

mix
	.js(sourcePath + '/js/app.js', publicPath + '/js/').vue()
	.sass(sourcePath + '/sass/app.scss', publicPath + '/css/')
	.setPublicPath(publicPath)
	.version();
