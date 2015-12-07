var gulp = require("gulp");
var shell = require('gulp-shell');
var elixir = require('laravel-elixir');

// ///////////////////////////////////////////
// Gulp semantic Build task
// 'gulp semantic' to run
// ///////////////////////////////////////////
var build = require('./semantic/tasks/build');
gulp.task('semantic', build);

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

    /**
     * Compile less
     **/
    mix.less(["app.less"]);

    /**
     * Concat scripts
     **/
    mix.browserify("app.js");
    mix.browserify("vendor.js");

    /**
     * Copy images
     */
    mix.copy('resources/images', 'assets/images');

});
