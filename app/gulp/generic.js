/********************************************************************************
  generic.js
    Defines application build task functions for import into the gulpfile.js.  Contains procedures which are the same across builds.
********************************************************************************/

'use strict'

// Native Node Modules
const path = require('path')

// Local Variables
const appRoot = path.join(__dirname, '..')

// Copies font files into the build folder.
const fonts = (gulp) => {
  return () => {
    return gulp.src(path.join(appRoot, 'css', 'fonts', '*'))
      .pipe(gulp.dest(path.join(appRoot, 'deployment', 'css', 'fonts')))
  }
}
exports.fonts = fonts

// Module Export
module.exports = exports
