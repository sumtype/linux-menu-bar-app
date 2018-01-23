/********************************************************************************
  gulpfile.js
    Gulpfile defining application build task procedures.  Contains procedures for development and production application builds.  Created builds are saved inside the "deployment" folder of the app's root directory.
********************************************************************************/

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const plugins = gulpLoadPlugins()

// Local Modules
const development = require(path.join(__dirname, 'gulp', 'development'))
const production = require(path.join(__dirname, 'gulp', 'production'))
const generic = require(path.join(__dirname, 'gulp', 'generic'))

// Generic build tasks.
gulp.task('fonts:generic', generic.fonts(gulp))

// Development build tasks.
gulp.task('webpack:development', development.webpack(gulp))
gulp.task('html:development', development.html(gulp))
gulp.task('css:development', development.css(gulp, plugins))
gulp.task('images:development', development.images(gulp))

// Production build tasks.
gulp.task('webpack:production', production.webpack(gulp))
gulp.task('html:production', production.html(gulp, plugins))
gulp.task('css:production', production.css(gulp, plugins))
gulp.task('images:production', production.images(gulp, plugins))

// Wrapper tasks for different builds.
gulp.task('build:development', ['webpack:development', 'html:development', 'fonts:generic', 'css:development', 'images:development'])
gulp.task('build:production', ['webpack:production', 'html:production', 'fonts:generic', 'css:production', 'images:production'])

// Default Gulp task, set to create a development build.
gulp.task('default', ['build:development'])
